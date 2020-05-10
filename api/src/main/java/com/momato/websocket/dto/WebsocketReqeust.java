package com.momato.websocket.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WebsocketReqeust {
	private String action;
	private String target;
	private int tomatoIdx;
	
	public boolean isTargetRegularTime() {
		return target.contentEquals("regularTime");
	};
	
	public boolean isRequiredSave() {
		return action.equals("start");
	}
	
}
