package com.momato.exception;

import org.springframework.http.HttpStatus;

public abstract class AbstractException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    
    public AbstractException() {
        super();
    }
 
    public AbstractException(String msg) {
        super(msg);
    }
 
    public AbstractException(Throwable e) {
        super(e);
    }
 
    public AbstractException(String errorMessge, Throwable e) {
        super(errorMessge, e);
    }
 
    public abstract HttpStatus getHttpStatus();
}
