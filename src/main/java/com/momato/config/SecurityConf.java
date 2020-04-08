package com.momato.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

import lombok.RequiredArgsConstructor;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConf extends WebSecurityConfigurerAdapter{
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	    http
	    	.csrf().disable() // csrf 제거
	        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 제거
	        .and()
	            .authorizeRequests()
	            	.antMatchers("/**").permitAll(); // 모든 페이지 허용
//	                .antMatchers("/members/signin","/members/signup").permitAll() //회원가입 로그인 접근 
//	            .anyRequest().hasRole("USER"); //나머지 페이지
	}
	
}
