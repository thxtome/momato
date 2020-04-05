package com.momato.member;

import org.apache.ibatis.annotations.Mapper;

import com.momato.member.dto.Member;

@Mapper
public interface MemberMapper {
	Member selectMember();
}
