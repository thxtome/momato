package com.momato.template.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Template {
	private int templateIdx;
	private String templateName;
	private String templateComment;
	private Date templateRegdate;
	private String memberId;
}
