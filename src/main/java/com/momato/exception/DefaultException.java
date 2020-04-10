package com.momato.exception;

import org.springframework.http.HttpStatus;

public class DefaultException extends AbstractException	{
    private static final long serialVersionUID = 1L;
    
    public DefaultException() {
        super();
    }
 
    public DefaultException(String msg) {
        super(msg);
    }
 
    public DefaultException(Throwable e) {
        super(e);
    }
 
    public DefaultException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.INTERNAL_SERVER_ERROR; 
    };
}
