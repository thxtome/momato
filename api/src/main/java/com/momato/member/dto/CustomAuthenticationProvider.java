package com.momato.member.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.momato.member.MemberServiceImpl;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider { // authenticationManager
	@Autowired
	MemberServiceImpl service;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		UsernamePasswordAuthenticationToken authToken = (UsernamePasswordAuthenticationToken) authentication; 

		UserPrincipal userPrincipal = (UserPrincipal) service.loadUserByUsername(authToken.getName()); 
		if (userPrincipal == null) {
			throw new UsernameNotFoundException(authToken.getName());
		}

		if (!matchPassword(userPrincipal.getPassword(), authToken.getCredentials())) {
			throw new BadCredentialsException("not matching username or password");
		}

		return new UsernamePasswordAuthenticationToken(userPrincipal, null, null);
	}

	private boolean matchPassword(String password, Object credentials) {
		return password.equals(credentials);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
	}

}