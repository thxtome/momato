package com.momato.websocket.dto;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WebsocketResponse {
	private boolean status;
	private String message;
	private HashMap<String,Object> data;
	
	public WebsocketResponse(boolean status) {
		this.status = status;
		this.data = new HashMap<>();
	}
	
	public WebsocketResponse(String message) {
		this(true, message);
	}
	
	public WebsocketResponse(boolean status, String message) {
		this.status = status;
		this.message = message + " success";
		this.data = new HashMap<>();
	}
	
	public WebsocketResponse(boolean status, String message , String action) {
		this.status = status;
		this.message = message;
		this.data = new HashMap<>();
		this.data.put("action", action);
	}
	
	public void addData (String key ,Object value) {
		this.data.put(key, value);
	}
}
