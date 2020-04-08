package com.momato.member;

import com.momato.member.dto.Member;

public interface MemberService {
	public Member retrieveMember(Member loginMem);
	public Member retrieveMemberById(String memberId);
	public void createMember(Member member);
}
