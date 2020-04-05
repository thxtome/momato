package com.momato.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.member.dto.Member;

@RestController
@RequestMapping("/")
public class MemberController {
	
	@Autowired
	MemberService service;
	
	@RequestMapping("member")
	@GetMapping
	public Member retrieveMember() {
		return service.retrieveMember();
	}
}
