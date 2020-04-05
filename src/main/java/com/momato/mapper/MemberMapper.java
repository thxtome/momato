package com.momato.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.momato.dto.Member;

@Mapper
public interface MemberMapper {
	Member selectMember();
}
