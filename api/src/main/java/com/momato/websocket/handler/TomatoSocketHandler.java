package com.momato.websocket.handler;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.momato.tomato.TomatoService;
import com.momato.tomato.dto.Tomato;
import com.momato.websocket.dto.WebsocketReqeust;
import com.momato.websocket.dto.WebsocketResponse;

@Component
public class TomatoSocketHandler extends TextWebSocketHandler {

	HashMap<String, WebSocketSession> sessionMap = new HashMap<>();
	HashMap<String, Tomato> tomatoMap = new HashMap<>();
	HashMap<String, WebsocketReqeust> requestMap = new HashMap<>();

	@Autowired
	Gson gson;

	@Autowired
	private TomatoService service;

	// 연결이 되고나면
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		//맵에 세션을 추가해주고
		sessionMap.put(session.getId(), session);
		// 응답객체를 생성후 세션에 넣어주고 연결에 성공했다고 응답을 내려줌
		WebsocketResponse socketResp = new WebsocketResponse(true, "connection succeed");
		socketResp.addData("action","connection");
		
		session.sendMessage(new TextMessage(gson.toJson(socketResp)));
	}

	// 연결 외에 요청이 오면
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// 요청객체를 받아서 요청을 나눔
		WebsocketReqeust socketReq = gson.fromJson(message.getPayload(), WebsocketReqeust.class);
		requestMap.put(session.getId(), socketReq);
		String target = socketReq.getTarget();
        String action = socketReq.getAction();
		WebsocketResponse socketResp = null;
		Tomato tomato = null;

		// 요청에 따른 로직을 작성
		switch (socketReq.getAction()) {

		// 토마토를 로드하는 요청을 받으면
		case "load":
			// db에서 토마토 정보를 꺼내와 맵에 추가
			tomato = service.retrieveOneTomato(socketReq.getTomatoIdx());
			tomatoMap.put(session.getId(), tomato);

			// 응답객체 생성후 토마토 정보와 함께 보내줌
			socketResp = new WebsocketResponse(true);
			socketResp.addData("tomato", tomato);
			socketResp.addData("action", action);
			break;

		// 타이머 시작요청을 받으면
		case "start":
			// 맵에서 토마토를 꺼내 타이머 시작 시간을 입력함
			tomato = tomatoMap.get(session.getId());
			tomato.startTimer();

			// 응답객체 생성후 시작했다고 보냄
			socketResp = new WebsocketResponse(true);
			socketResp.addData("action", action);
			socketResp.addData("target", target);
			break;

		// 정지요청을 받으면
		case "stop":
			// 맴에서 토마토를 꺼내 타이머 종료시간을 입력
			tomato = tomatoMap.get(session.getId());
			tomato.endTimer();

			// 요청 대상이 무엇인지 확인후에 시간을 계산함
			if (socketReq.isTargetRegularTime()) {
				tomato.calRegularTime();
			} else {
				tomato.calBreakTime();
			}

			// 응답객체 생성후 정지했다고 보냄
			socketResp = new WebsocketResponse(true);
			socketResp.addData("action", action);
			socketResp.addData("target", target);
			
			// db에 반영
			service.editTomato(tomato);
			break;

		// 타이머 리셋요청을 받으면
		case "reset":
			// 맵에서 토마토를 꺼내고
			tomato = tomatoMap.get(session.getId());
			// 요청 대상이 무엇인지 확인후에 시간을 리셋함
			if (socketReq.isTargetRegularTime()) {
				tomato.resetLeftRegular();
			} else {
				tomato.resetLeftBreak();
			}

			// 응답객체를 생성후에 리셋했다고 보냄
			socketResp = new WebsocketResponse(true);
			socketResp.addData("action", action);
			socketResp.addData("target", target);

			// db에 반영
			service.editTomato(tomato);
			break;

		// 타이머 완료 요청을 받으면
		case "finish":
			// 응답객체를 생성
			socketResp = new WebsocketResponse(true);
			socketResp.addData("action", action);
			socketResp.addData("target", target);

			// 맵에서 토마토를 꺼내고
			tomato = tomatoMap.get(session.getId());
			
			// 요청 대상이 무엇인지 확인후에 완료처리를 함
			if (socketReq.isTargetRegularTime()) {
				//정규시간이 완료되면 토마토를 완료처리하고 
				tomato.finishRegular();
				socketResp.addData("tomato", tomato);
			} else {
				//휴식시간이 완료되면 남은 휴식시간을 처리함
				tomato.finishLeftBreak();
			}

			// db에 반영
			service.editTomato(tomato);

			break;
		}
		// 로직에 따른 응답을 보냄
		session.sendMessage(new TextMessage(gson.toJson(socketResp)));
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		WebsocketReqeust lastSocketReq = requestMap.get(session.getId());
		// 연결이 종료되면 마지막 요청을 가지고 와서 저장이 안 되어있으면 토마토를 저장하고나서
		if (lastSocketReq.isRequiredSave()) {
			Tomato tomato = tomatoMap.get(session.getId());
			tomato.endTimer();
			if (lastSocketReq.isTargetRegularTime()) {
				tomato.calRegularTime();
			} else {
				tomato.calBreakTime();
			}
			service.editTomato(tomato);
		}

		// 세션에서 제거해준다.
		sessionMap.remove(session.getId());
		tomatoMap.remove(session.getId());
		requestMap.remove(session.getId());
	}

}
