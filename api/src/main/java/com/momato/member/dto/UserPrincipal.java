package com.momato.member.dto;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {
	
	private static final long serialVersionUID = 295874931921099560L;
	private String memberId;
	private String memberPass;
	private String memberName;
	
	public UserPrincipal(Member member) {
		super();
		this.memberId = member.getMemberId();
		this.memberPass = member.getMemberPass();
		this.memberName = member.getMemberName();
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.memberPass;
	}
	
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.memberId;
	}
	
	public String getUserNickName() {
		return this.memberName;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	public static UserPrincipal create(Member member) {
		return new UserPrincipal(member);
	}
	
	
	
}
