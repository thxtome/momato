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
	
	public long startTimer() {
		this.tomatoStartTime = System.currentTimeMillis();
		return tomatoStartTime;
	}
	public long endTimer() {
		this.tomatoEndTime = System.currentTimeMillis();
		return tomatoEndTime;
	}
}
