package com.momato.websocket.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WebsocketResponse {
	private boolean success;
	private String message;
	private Object data;
	private String action;
	
	public WebsocketResponse(String message) {
		this(true, message);
	}
	
	public WebsocketResponse(boolean success, String message) {
		this.success = success;
		this.message = message + " success";
	}
}
