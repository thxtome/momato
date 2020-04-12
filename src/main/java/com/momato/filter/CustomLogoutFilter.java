package com.momato.filter;

import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

import com.momato.handler.CustomLogoutSuccessHandler;
import com.momato.member.MemberService;

public class CustomLogoutFilter extends LogoutFilter{

	public CustomLogoutFilter(MemberService service) {
		super(new CustomLogoutSuccessHandler(service), new SecurityContextLogoutHandler());
		setFilterProcessesUrl("/members/logout");
		// TODO Auto-generated constructor stub
	}

	@Override
	public void setFilterProcessesUrl(String filterProcessesUrl) {
		// TODO Auto-generated method stub
		super.setFilterProcessesUrl(filterProcessesUrl);
	}

	
	
}
