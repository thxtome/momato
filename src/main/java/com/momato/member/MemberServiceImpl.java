package com.momato.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.momato.member.dto.Member;
import com.momato.member.dto.UserPrincipal;

@Service	
public class MemberServiceImpl implements MemberService, UserDetailsService{

	@Autowired PasswordEncoder passwordEncoder;
	
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
	public void createMember(Member member) {
		member.setMemberPass(passwordEncoder.encode(member.getMemberPass()));
		mapper.insertMember(member);
	}
	
}
