package com.momato.member;

import java.util.UUID;

import javax.mail.MessagingException;
import javax.validation.constraints.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.momato.common.dto.ResponseResult;
import com.momato.exception.InvalidRequestException;
import com.momato.member.dto.Member;
import com.momato.member.dto.UserPrincipal;
import com.momato.util.MailUtil;

@Service	
public class MemberServiceImpl implements MemberService, UserDetailsService{

	@Autowired PasswordEncoder passwordEncoder;
	
	@Autowired MailUtil mailUtil;
	
	@Autowired
	MemberMapper mapper;

	@Override
	public Member retrieveMember(Member loginMem) {
		return mapper.selectMember(loginMem);
	}

	@Override
	public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
		Member member = null;
		try {
			member = mapper.selectMemberById(memberId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new UserPrincipal(member);
	}

	@Override
	public Member retrieveMemberById(String memberId) {
		return mapper.selectMemberById(memberId);
	}
	
	@Override
	public ResponseResult retrieveMemberByIdExcludePass(String memberId) {
		return new ResponseResult(HttpStatus.OK, mapper.selectMemberByIdExcludePass(memberId));
	}

	@Override
	public ResponseResult createMember(Member member) {
		member.setMemberPass(passwordEncoder.encode(member.getMemberPass()));
		mapper.insertMember(member);
		return new ResponseResult(HttpStatus.OK);
	}

	@Override
	public boolean jwtIsInvalid(String token) {
		return mapper.selectIsTokenContainedOfBlackList(token);
	}

	@Override
	public void logout(String token) {
		mapper.insertJwtBlacklist(token);
	}

	@Override
	public ResponseResult deleteMember(String memberId) {
		mapper.deleteMember(memberId);
		return new ResponseResult(HttpStatus.OK);
	}

	@Override
	public ResponseResult updateMember(Member member) {
		if(member.getMemberPass() != null) {
			member.setMemberPass(passwordEncoder.encode(member.getMemberPass()));
		}
		mapper.updateMember(member);
		return new ResponseResult(HttpStatus.OK);
	}

	@Override
	public ResponseResult createTempPass(@Email String memberId) throws MessagingException, InvalidRequestException {
		Member member = mapper.selectMemberByIdExcludePass(memberId);
		//아이디가 없을 경우
		if(member == null) {
			//예외처리
			throw new InvalidRequestException("member is not found");
		} else {
			//임시비밀번호 생성
			String tempPass = generatePass();
			member.setMemberId(memberId);
			member.setMemberPass(passwordEncoder.encode(tempPass));
			//멤버 업데이트
			mapper.updateMember(member);
			//임시비밀번호를 멤버의 메일로 전송
			mailUtil.sendMail(memberId, tempPass);
		}
		
		return new ResponseResult(HttpStatus.OK);
	}
	
	public String generatePass() {
		String uuid = UUID.randomUUID().toString();
		return uuid.replaceAll("-", "").substring(0,10);
	}
	
}
