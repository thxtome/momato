package com.momato.member.dto;

import javax.validation.constraints.Email;

import lombok.Data;

@Data
public class Member{
	
	@Email
	private String memberId;
	private String memberPass;
	private String memberName;
    private Grade memberGrade;
	
	
	public boolean hasAnyData() {
		return (memberId != null || memberPass != null || memberName != null);
	}
	
	public boolean hasAllData() {
		return (memberId != null && memberId.length() > 0 && memberPass != null && memberPass.length() > 0 
				&& memberName != null && memberName.length() > 0 );
	}
	
}
