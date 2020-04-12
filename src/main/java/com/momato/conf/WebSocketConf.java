package com.momato.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.momato.websocket.handler.TomatoSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConf implements WebSocketConfigurer {

	@Autowired
	private TomatoSocketHandler tomatoSocketHandler;
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(tomatoSocketHandler, "/socket");
	}


}
