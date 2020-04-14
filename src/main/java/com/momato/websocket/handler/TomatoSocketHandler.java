package com.momato.websocket.handler;

import java.util.HashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class TomatoSocketHandler extends TextWebSocketHandler {

		HashMap<String, WebSocketSession> sessionMap = new HashMap<>();

		@Override
		public void afterConnectionEstablished(WebSocketSession session) throws Exception {
			super.afterConnectionEstablished(session);
			session.sendMessage(new TextMessage("CONNECT".getBytes()));
			sessionMap.put(session.getId(), session);
		}

		@Override
		public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
			String msg = message.getPayload();
			for(String key : sessionMap.keySet()) {
				WebSocketSession wss = sessionMap.get(key);
				try {
					wss.sendMessage(new TextMessage("echo : " + msg));
				}catch(Exception e) {
					e.printStackTrace();
				}
			}
		}

		@Override
		public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
			super.afterConnectionClosed(session, status);
			sessionMap.remove(session.getId());
		}
		
}
