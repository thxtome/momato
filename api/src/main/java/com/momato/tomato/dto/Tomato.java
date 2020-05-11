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
	private boolean tomatoCanStart;
	private long tomatoStartTime;
	private long tomatoEndTime;
	private int templateIdx;
	private String memberId;
	
	public void startTimer() {
		this.tomatoStartTime = System.currentTimeMillis();
		System.out.println("시작시간 : " + new Date(tomatoStartTime));
	}
	
	public void endTimer() {
		this.tomatoEndTime = System.currentTimeMillis();
		System.out.println("종료시간 : " + new Date(tomatoEndTime));
	}
	
	public void calRegularTime() {
		if(tomatoStartTime == 0) {
			tomatoStartTime = tomatoEndTime;
		}
		this.tomatoLeftRegular -= (int) ((tomatoEndTime - tomatoStartTime)/1000); 
		System.out.println("시작시간 : " + new Date(tomatoStartTime));
		System.out.println("종료시간 : " +new Date(tomatoEndTime));
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

	public void resetLeftRegular() {
		this.tomatoLeftRegular = this.tomatoFullRegular;
	}

	public void resetLeftBreak() {
		this.tomatoLeftBreak= this.tomatoFullBreak;
	}

	//정규시간이 완료되면 남은시간과 시작시간 끝 시간을 0으로 만들고 타이머 시작가능여부를 false로 만든다.
	public void finishRegular() {
		this.tomatoLeftRegular = 0;		
		this.tomatoStartTime = 0;
		this.tomatoEndTime = 0;
		this.tomatoCanStart = false;
		
	}

	//휴식시간이 완료되면 남은 휴식시간을 0으로 만든다.
	public void finishLeftBreak() {
		this.tomatoLeftBreak= 0;		
		this.tomatoStartTime = 0;
		this.tomatoEndTime = 0;
	}
}
