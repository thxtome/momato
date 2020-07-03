package com.momato.member;

import javax.mail.MessagingException;
import javax.validation.Valid;
import javax.validation.constraints.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.common.dto.ResponseResult;
import com.momato.exception.IdDuplicateException;
import com.momato.exception.IdNotFoundException;
import com.momato.exception.InvalidRequestException;
import com.momato.member.dto.Member;

@RestController
@RequestMapping("/members")
public class MemberController {
	
	@Autowired
	MemberService service;
	
	@PostMapping()
	public ResponseResult signup (@RequestBody Member member) throws InvalidRequestException, IdDuplicateException {
		System.out.println(member.hasAllData());
		if(!member.hasAllData()) {
			throw new InvalidRequestException("member parameter is empty");
		}
		return service.createMember(member);
	}
	
	@PutMapping()
	public ResponseResult updateMember(@Valid @RequestBody Member member, @AuthenticationPrincipal String memberId) throws InvalidRequestException {
		if(!member.hasAnyData()) {
			throw new InvalidRequestException("member parameter is empty");
		}
		member.setMemberId(memberId);
		return service.updateMember(member);
	}
	
	@DeleteMapping
	public ResponseResult deleteMember(@AuthenticationPrincipal String memberId) {
		return service.deleteMember(memberId);
	}
	
	@GetMapping
	public ResponseResult retrieveMember(@AuthenticationPrincipal String memberId) {
		return service.retrieveMemberByIdExcludePass(memberId);
	}
	
	@GetMapping("/tempPass")
	public ResponseResult createTempPass(@Email String memberId) throws MessagingException, IdNotFoundException {
		return service.createTempPass(memberId);
	}
}
