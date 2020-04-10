package com.momato.tomato.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Tomato {
	private String createType;
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
	private String memberId;
}
