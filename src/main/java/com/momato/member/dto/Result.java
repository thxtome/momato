package com.momato.member.dto;

import lombok.Data;

@Data
public class Result {
	private Object Data;
	private String status;
	
	public static Result successInstance() {
		return new Result("success");
	}

	public Result(String status) {
		this.status = status;
	};
}
