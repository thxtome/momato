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

//토큰없이 접근했을 떄
@Component
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
    	httpServletResponse.setContentType("application/json");
    	httpServletResponse.setStatus(401);
    	JwtAuthenticationException jwtException = new JwtAuthenticationException("Jwt is reqired or invalid",e);	
    	ResponseResult rr = new ResponseResult(jwtException,httpServletRequest.getRequestURI().toString()); 
        OutputStream out = httpServletResponse.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, rr);
        out.flush();
    }
    
}