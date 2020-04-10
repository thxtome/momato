package com.momato.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.momato.common.dto.ResponseResult;

@RestController
@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
	public ResponseResult invalidRequestException(HttpServletRequest req, Exception e) {
    	InvalidRequestException InvalidException = new InvalidRequestException(e.getMessage(),e);
		ResponseResult rr = new ResponseResult(InvalidException,req.getRequestURI().toString()); 
		return rr;
	}	
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseResult defaultException(HttpServletRequest req, Exception e) {
    	DefaultException defaultException = new DefaultException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(defaultException,req.getRequestURI().toString()); 
    	return rr;
    }
    
}
 