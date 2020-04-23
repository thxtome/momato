package com.momato.exception;

import org.springframework.http.HttpStatus;

public abstract class NotFoundException extends AbstractException{
    private static final long serialVersionUID = 1L;
    
    public NotFoundException() {
        super();
    }
 
    public NotFoundException(String msg) {
        super(msg);
    }
 
    public NotFoundException(Throwable e) {
        super(e);
    }
 
    public NotFoundException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public abstract HttpStatus getHttpStatus();
}
