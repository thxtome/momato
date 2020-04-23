package com.momato.exception;

import org.springframework.http.HttpStatus;

public class InvalidRequestException extends AbstractException	{
    private static final long serialVersionUID = 1L;
    
    public InvalidRequestException() {
        super();
    }
 
    public InvalidRequestException(String msg) {
        super(msg);
    }
 
    public InvalidRequestException(Throwable e) {
        super(e);
    }
 
    public InvalidRequestException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.BAD_REQUEST; 
    };
}
