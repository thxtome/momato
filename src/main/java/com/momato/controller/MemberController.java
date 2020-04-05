package com.momato.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.dto.Member;
import com.momato.service.MemberService;

@RestController
@RequestMapping("/")
public class MemberController {
	
	@Autowired
	MemberService service;
	
	@RequestMapping("member")
	@GetMapping
	public Member test() {
		return service.retrieveMember();
	}
}
