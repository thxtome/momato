package com.momato.member.dto;

import javax.validation.constraints.Email;

import lombok.Data;

@Data
public class Member{
	@Email
	private String memberId;
	private String memberPass;
	private String memberName;
	
	public boolean hasAnyData() {
		return (memberId != null || memberPass != null || memberName != null);
	}
}
