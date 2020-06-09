package com.momato.websocket.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReloadData {
	private Integer tomatoIdx;
	private Integer leftTime;
	private String target;
	private boolean isGoing;
	private boolean isFinished;
	
	public boolean isTargetRegular () {
		return target.equals("regularTime") ? true : false;
	}
}
