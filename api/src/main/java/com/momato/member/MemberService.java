package com.momato.member;

import javax.mail.MessagingException;
import javax.validation.constraints.Email;

import com.momato.common.dto.ResponseResult;
import com.momato.exception.IdDuplicateException;
import com.momato.exception.IdNotFoundException;
import com.momato.member.dto.Member;

public interface MemberService {
	public Member retrieveMember(Member loginMem);
	public Member retrieveMemberById(String memberId);
	public ResponseResult createMember(Member member) throws IdDuplicateException;
	public boolean jwtIsInvalid(String token);
	public void logout(String token);
	public ResponseResult retrieveMemberByIdExcludePass(String memberId);
	public ResponseResult deleteMember(String memberId);
	public ResponseResult updateMember(Member member);
	public ResponseResult createTempPass(@Email String memberId) throws MessagingException, IdNotFoundException;
}
