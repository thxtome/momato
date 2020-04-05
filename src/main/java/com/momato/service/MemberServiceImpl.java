package com.momato.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momato.dto.Member;
import com.momato.mapper.MemberMapper;

@Service	
public class MemberServiceImpl implements MemberService{

	@Autowired
	MemberMapper mapper;

	@Override
	public Member retrieveMember() {
		return mapper.selectMember();
	}
	
}
