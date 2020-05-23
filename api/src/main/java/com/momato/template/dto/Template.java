package com.momato.template.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class Template {
	private int templateIdx;
	private String templateName;
	private String templateComment;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="Asia/Seoul")
	private LocalDate templateRegdate;

	private String memberId;
}
