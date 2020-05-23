package com.momato.exception;

import org.springframework.http.HttpStatus;

public class IdNotFoundException extends AbstractException	{
    private static final long serialVersionUID = 1L;
    
    public IdNotFoundException() {
        super();
    }
 
    public IdNotFoundException(String msg) {
        super(msg);
    }
 
    public IdNotFoundException(Throwable e) {
        super(e);
    }
 
    public IdNotFoundException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.BAD_REQUEST; 
    };
}
