package com.momato.exception.handler;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.momato.common.dto.ResponseResult;
import com.momato.exception.JwtAuthenticationException;

//시큐리티 필터에서 예외 발생시 처리
@Component
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
    	httpServletResponse.setContentType("application/json");
    	JwtAuthenticationException jwtException = new JwtAuthenticationException("member's Information is insufficient",e);    		
    	if(org.springframework.security.authentication.InsufficientAuthenticationException.class == e.getClass()) {
    		jwtException = new JwtAuthenticationException("member's Information is insufficient",e);    		
    	}
    	ResponseResult rr = new ResponseResult(jwtException,httpServletRequest.getRequestURI().toString()); 
        OutputStream out = httpServletResponse.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, rr);
        out.flush();
    }
    
}