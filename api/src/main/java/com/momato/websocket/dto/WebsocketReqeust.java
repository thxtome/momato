package com.momato.websocket.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WebsocketReqeust {
	private String action;
	private String target;
	private int tomatoIdx;
	private ReloadData reloadData;
	
	public boolean isTargetRegularTime() {
		return (null != target && target.contentEquals("regularTime")) || (action.equals("reload") && reloadData.isTargetRegular());
	};
	
	public boolean isRequiredSave() {
		return action.equals("start") || (action.equals("reload") && reloadData.isGoing()) ;
	}
	
}
