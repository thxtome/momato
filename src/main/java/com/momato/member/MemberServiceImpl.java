package com.momato.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momato.member.dto.Member;

@Service	
public class MemberServiceImpl implements MemberService{

	@Autowired
	MemberMapper mapper;

	@Override
	public Member retrieveMember(Member loginMem) {
		return mapper.selectMember(loginMem);
	}
	
}
