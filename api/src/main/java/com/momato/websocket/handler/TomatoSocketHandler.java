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
	HashMap<WebSocketSession,Tomato> tomatoMap = new HashMap<>();
	
	@Autowired
	Gson gson;
	
	@Autowired
	private TomatoService service;

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("enter==============================================================================");
		WebsocketResponse socketRspn = new WebsocketResponse();
		socketRspn.setAction("connection");			
		System.out.println((socketRspn));
		session.sendMessage(new TextMessage(gson.toJson(socketRspn)));
		sessionMap.put(session.getId(), session);
	}

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		WebsocketReqeust wr = gson.fromJson(message.getPayload(), WebsocketReqeust.class);
		String action = wr.getAction();
		String target = wr.getTarget();
		Tomato tomato = tomatoMap.get(session);
		WebsocketResponse socketRspn = new WebsocketResponse();
		
		switch (action) {
		// 타이머 첫 시작
		case "load":
			System.out.println("load====================================================================================================");
			tomato = service.retrieveOneTomato(wr.getTomatoIdx());
			tomatoMap.put(session, tomato);
			socketRspn.setData(tomato);
			socketRspn.setAction("load");			
			session.sendMessage(new TextMessage(gson.toJson(socketRspn)));
			break;

		// 타이머 정지 후 시작
		case "start":
			tomato.startTimer();
			
			socketRspn.setAction("start");			
			session.sendMessage(new TextMessage(gson.toJson(socketRspn)));
			break;

		// 타이머 일시 정지
		case "stop":
			tomato.endTimer();
			
			if (target.equals("regularTime")) {
				tomato.calRegularTime();
			} else if (target.equals("breakTime")) {
				tomato.calBreakTime();
			}
			

			socketRspn.setAction("stop");			
			session.sendMessage(new TextMessage(gson.toJson(socketRspn)));
//			service.editTomato(tomato);
			break;

		// 타이머 리셋
		case "reset":
			if (target.equals("regularTime")) {
				tomato.setTomatoLeftRegular(tomato.getTomatoFullRegular());
			} else if (target.equals("breakTime")) {
				tomato.setTomatoLeftBreak(tomato.getTomatoFullBreak());
			}
			socketRspn.setAction("reset");			
			session.sendMessage(new TextMessage(gson.toJson(socketRspn)));
//			service.editTomato(tomato);
			break;

		}

//		session.sendMessage(new TextMessage(gson.toJson(new WebsocketResponse(action))));
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("close=====================================================================");
		Tomato tomato = tomatoMap.get(session);
		service.editTomato(tomato);
		System.out.println("end");
		System.out.println(tomato);
		sessionMap.remove(session.getId());
		tomatoMap.remove(session);
	}

}
