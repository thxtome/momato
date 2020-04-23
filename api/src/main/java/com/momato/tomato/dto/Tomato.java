package com.momato.tomato.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Tomato {
	private int tomatoIdx;
	private String tomatoName;
	private int tomatoFullRegular;
	private int tomatoLeftRegular;
	private int tomatoFullBreak;
	private int tomatoLeftBreak;
	private Date tomatoDate;
	private int tomatoCanStart;
	private long tomatoStartTime;
	private long tomatoEndTime;
	private int templateIdx;
	private String memberId;
	
	public void startTimer() {
		this.tomatoStartTime = System.currentTimeMillis();
	}
	
	public void endTimer() {
		this.tomatoEndTime = System.currentTimeMillis();
	}
	
	public void calRegularTime() {
		if(tomatoStartTime == 0) {
			tomatoStartTime = tomatoEndTime;
		}
		this.tomatoLeftRegular -= (int) ((tomatoEndTime - tomatoStartTime)/1000); 
		this.tomatoStartTime = 0;
		this.tomatoEndTime = 0;
	}
	
	public void calBreakTime() {
		if(tomatoStartTime == 0) {
			tomatoStartTime = tomatoEndTime;
		}
		this.tomatoLeftBreak -= (int) ((tomatoEndTime - tomatoStartTime)/1000); 
		this.tomatoStartTime = 0;
		this.tomatoEndTime = 0;
	}
}
