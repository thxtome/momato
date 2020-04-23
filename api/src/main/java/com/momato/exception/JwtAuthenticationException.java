package com.momato.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;

public class JwtAuthenticationException extends AuthenticationException	{
    private static final long serialVersionUID = 1L;
    

    public JwtAuthenticationException(String msg) {
        super(msg);
    }
 

    public JwtAuthenticationException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.UNAUTHORIZED; 
    };
}
