package com.momato.member.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.momato.common.dto.ResponseResult;
import com.momato.exception.InvalidRequestException;
import com.momato.exception.JwtAuthenticationException;

public class JwtExceptionFilter extends OncePerRequestFilter {

	@Override
	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			filterChain.doFilter(request, response);
		} catch (NullPointerException e) {
			InvalidRequestException ie = new InvalidRequestException("Member parameters are invalid", e);
			ResponseResult errorResponse = new ResponseResult(ie, "Login", "0003", request.getRequestURI());
			response.setContentType("application/json");
			response.setStatus(HttpStatus.BAD_REQUEST.value());
			response.getWriter().write(convertObjectToJson(errorResponse));
		} catch (JwtAuthenticationException e) {
			ResponseResult errorResponse = new ResponseResult(e, "Login", "0003", request.getRequestURI());
			response.setContentType("application/json");
			response.setStatus(HttpStatus.BAD_REQUEST.value());
			response.getWriter().write(convertObjectToJson(errorResponse));
		}
		
	}

	public String convertObjectToJson(Object object) throws JsonProcessingException {
		if (object == null) {
			return null;
		}
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}
}