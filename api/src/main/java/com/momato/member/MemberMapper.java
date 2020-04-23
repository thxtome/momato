package com.momato.member;

import org.apache.ibatis.annotations.Mapper;

import com.momato.member.dto.Member;

@Mapper
public interface MemberMapper {
	Member selectMember(Member loginMem);
	Member selectMemberById(String memberId);
	void insertMember(Member member);
	boolean selectIsTokenContainedOfBlackList(String token);
	void insertJwtBlacklist(String token);
	Member selectMemberByIdExcludePass(String memberId);
	void deleteMember(String memberId);
	void updateMember(Member member);
}
