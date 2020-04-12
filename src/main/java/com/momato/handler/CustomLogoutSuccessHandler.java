package com.momato.handler;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.momato.common.dto.ResponseResult;
import com.momato.member.MemberService;
import com.momato.util.JwtProperties;

public class CustomLogoutSuccessHandler implements LogoutSuccessHandler{

	MemberService service;
	
	public CustomLogoutSuccessHandler(MemberService service) {
		super();
		this.service = service;
	}

	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
			
			String token = request.getHeader(JwtProperties.HEADER_STRING);

			service.logout(token);

	        //바디를 채워준다.
	        ResponseResult rr = new ResponseResult(HttpStatus.OK );
	        OutputStream out = response.getOutputStream();
	        ObjectMapper mapper = new ObjectMapper();
	        mapper.writeValue(out, rr);
	}

}
