package com.momato.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.member.dto.Member;

@RestController
@RequestMapping("/members")
public class MemberController {
	
	@Autowired
	MemberService service;
	
	@PostMapping("/signup")
	public void signup (@RequestBody Member member) {
		service.createMember(member);
	}
	
}
