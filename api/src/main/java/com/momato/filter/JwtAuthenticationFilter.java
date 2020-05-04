package com.momato.filter;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.momato.common.dto.ResponseResult;
import com.momato.exception.JwtAuthenticationException;
import com.momato.member.dto.Member;
import com.momato.member.dto.UserPrincipal;
import com.momato.util.JwtProperties;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	
	public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        // json형태로 보낸 아이디와 비밀번호로 Member클래스를 만든다.
    	
        Member credentials = null;
            try {
				credentials = new ObjectMapper().readValue(request.getInputStream(), Member.class);
			} catch (IOException e) {
				e.printStackTrace();
			}
        
        if(credentials.getMemberId() == null || credentials.getMemberPass() == null) {
        	credentials = null;
        }
            
        // Member클래스로 허가 토큰을 가져온다.
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                credentials.getMemberId(),
                credentials.getMemberPass(),
                new ArrayList<>()
        );
        // 인증요청토큰으로 인증을 반환한다.
        Authentication auth = authenticationManager.authenticate(authenticationToken);
        return auth;
    }

    //성공시
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        // 인증결과를 user로 반환한다.
        UserPrincipal principal = (UserPrincipal) authResult.getPrincipal();

        // 토큰생성
        String token = JWT.create()
        		.withSubject(principal.getUsername())
        		.withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
        		.sign(Algorithm.HMAC512(JwtProperties.SECRET.getBytes()));
        
        // 토큰을 뿌린다
        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + token);
        
    	ResponseResult rr = new ResponseResult(HttpStatus.OK );
        
        //바디를 채워준다.
        OutputStream out = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, rr);
    }

    
    //인증에 실패했을 때
	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException failed) throws IOException, ServletException {
		
    	response.setContentType("application/json");
    	JwtAuthenticationException jwtException = null;
    	String code = "0";
    	
    	switch (failed.getClass().getName()) {
		//아이디가 아예 없을때
    	case "org.springframework.security.authentication.InternalAuthenticationServiceException":
			jwtException = new JwtAuthenticationException("There is no matching ID",failed);
			code = "0001";
			break;
			
		//아이디는 있으나 비밀번호가 일치하지 않을때
		case "org.springframework.security.authentication.BadCredentialsException":
			jwtException = new JwtAuthenticationException("Password do not match",failed);    		
			code = "0002";
			break;
		}
    	
    	//응답코드 변경
    	response.setStatus(401);
    	ResponseResult rr = new ResponseResult(jwtException, "Login", code, request.getRequestURI().toString()); 
        OutputStream out = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, rr);
        out.flush();
	}
    
    

}