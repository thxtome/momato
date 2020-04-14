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
	Gson gson = new Gson();
	Tomato tomato = new Tomato();
	long startTime = 0;
	long endTime = 0;
	int runTime = 0;

	@Autowired
	private TomatoService service;

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		session.sendMessage(new TextMessage(gson.toJson(new WebsocketResponse("connection"))));
		sessionMap.put(session.getId(), session);
	}

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		WebsocketReqeust wr = gson.fromJson(message.getPayload(), WebsocketReqeust.class);
		String action = wr.getAction();
		String target = wr.getTarget();
		System.out.println(wr);
		switch (action) {
		// 타이머 첫 시작
		case "load":
			tomato = service.retrieveOneTomato(wr.getTomatoIdx());
			startTime = tomato.startTimer();
			break;

		// 타이머 정지 후 시작
		case "start":
			startTime = tomato.startTimer();
			break;

		// 타이머 일시 정지
		case "stop":
			endTime = tomato.endTimer();
			runTime = (int) (endTime - startTime) / 60000;

			if (target.equals("regularTime")) {
				tomato.setTomatoLeftRegular(tomato.getTomatoLeftRegular() - runTime);
			} else if (target.equals("breakTime")) {
				tomato.setTomatoLeftBreak(tomato.getTomatoLeftBreak() - runTime);
			}
			service.editTomato(tomato);
			break;

		// 타이머 리셋
		case "reset":
			if (target.equals("regularTime")) {
				tomato.setTomatoLeftRegular(tomato.getTomatoFullRegular());
			} else if (target.equals("breakTime")) {
				tomato.setTomatoLeftBreak(tomato.getTomatoFullBreak());
			}
			service.editTomato(tomato);
			break;
		}

		for (String key : sessionMap.keySet()) {
			WebSocketSession wss = sessionMap.get(key);
			try {
				wss.sendMessage(new TextMessage(gson.toJson(new WebsocketResponse(action))));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessionMap.remove(session.getId());
	}

}
