package com.momato.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.momato.exception.JwtAuthenticationException;
import com.momato.member.MemberService;
import com.momato.member.dto.Member;
import com.momato.member.dto.UserPrincipal;
import com.momato.util.JwtProperties;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

	MemberService service;

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager, MemberService service) {
		super(authenticationManager);
		this.service = service;
	}

	// 토큰 검증
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// 헤더추출
		String header = request.getHeader(JwtProperties.HEADER_STRING);

		// jwt인지 확인
		if (header == null || !header.startsWith(JwtProperties.TOKEN_PREFIX)) {
			chain.doFilter(request, response);
			return;
		}

		// 헤더가 있고 jwt가 맞으면 유저의 정보를 가져옴
		Authentication authentication = getUsernamePasswordAuthentication(request);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		chain.doFilter(request, response);
	}

	private Authentication getUsernamePasswordAuthentication(HttpServletRequest request)
			throws AuthenticationException {
		String token = request.getHeader(JwtProperties.HEADER_STRING);

		if (token == null) {
			return null;
		}

		// 토큰의 유효성체크
		String memberId = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET.getBytes())).build()
				.verify(token.replace(JwtProperties.TOKEN_PREFIX, "")).getSubject();

		// db에서 로그아웃한 회원인지 확인
		if (service.jwtIsInvalid(token)) {
			throw new JwtAuthenticationException("token is expired");
		}

		// db에서 유저의 정보와 권한을 가져옴
		if (memberId == null) {
			return null;
		}
		
		
		Member member = service.retrieveMemberById(memberId);
		// db에서 로그아웃하거나 탈퇴한 회원인지 확인
		if (member == null) {
			throw new JwtAuthenticationException("member in this token is not found");
		}
		UserPrincipal principal = new UserPrincipal(member);
		UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(memberId, null,
				principal.getAuthorities());
		return auth;

	}

}