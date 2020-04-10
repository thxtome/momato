package com.momato.exception;

import org.springframework.http.HttpStatus;

public class JwtAuthenticationException extends AbstractException	{
    private static final long serialVersionUID = 1L;
    
    public JwtAuthenticationException() {
        super();
    }
 
    public JwtAuthenticationException(String msg) {
        super(msg);
    }
 
    public JwtAuthenticationException(Throwable e) {
        super(e);
    }
 
    public JwtAuthenticationException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.UNAUTHORIZED; 
    };
}
