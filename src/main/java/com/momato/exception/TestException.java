package com.momato.exception;

import org.springframework.http.HttpStatus;

public class TestException extends AbstractException	{
    private static final long serialVersionUID = 1L;
    
    public TestException() {
        super();
    }
 
    public TestException(String msg) {
        super(msg);
    }
 
    public TestException(Throwable e) {
        super(e);
    }
 
    public TestException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.BAD_REQUEST; 
    };
}
