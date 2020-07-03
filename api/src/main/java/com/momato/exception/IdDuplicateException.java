package com.momato.exception;

import org.springframework.http.HttpStatus;

public class IdDuplicateException extends AbstractException{
    private static final long serialVersionUID = 1L;
    
    public IdDuplicateException() {
        super();
    }
 
    public IdDuplicateException(String msg) {
        super(msg);
    }
 
    public IdDuplicateException(Throwable e) {
        super(e);
    }
 
    public IdDuplicateException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public HttpStatus getHttpStatus() {
    	return HttpStatus.BAD_REQUEST; 
    }
}
