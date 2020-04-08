package com.momato.filter;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.momato.exception.dto.ExceptionResponse;
import com.momato.member.dto.Member;
import com.momato.member.dto.UserPrincipal;
import com.momato.util.JwtProperties;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	
	public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}


    /* Trigger when we issue POST request to /login
    We also need to pass in {"username":"minho", "password":"minho123"} in the request body
    * */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        // json형태로 보낸 아이디와 비밀번호로 Member클래스를 만든다.
        Member credentials = null;
        try {
            credentials = new ObjectMapper().readValue(request.getInputStream(), Member.class);
           
        } catch (IOException e) {
            e.printStackTrace();
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

        //바디를 채워준다.
        ExceptionResponse result = new ExceptionResponse(200 , "success", "token issued success");
        OutputStream out = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, result);
        
        
    }
    
}