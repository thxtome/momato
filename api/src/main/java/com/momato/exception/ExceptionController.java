package com.momato.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import javax.mail.MessagingException;
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
	public ResponseResult filterInvalidRequestException(HttpServletRequest req, Exception e) {
    	InvalidRequestException InvalidException = new InvalidRequestException(e.getMessage(),e);
		ResponseResult rr = new ResponseResult(InvalidException, "0001", req.getRequestURI().toString()); 
		return rr;
	}

    @ExceptionHandler(InvalidRequestException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public ResponseResult invalidRequestException(HttpServletRequest req, Exception e) {
    	InvalidRequestException InvalidException = new InvalidRequestException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(InvalidException, "0002", req.getRequestURI().toString()); 
    	return rr;
    }	

    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public ResponseResult emptyRequestBodyException(HttpServletRequest req, Exception e) {
    	InvalidRequestException defaultException = new InvalidRequestException ("request body is missing",e);
    	ResponseResult rr = new ResponseResult(defaultException, "0003", req.getRequestURI().toString()); 
    	return rr;
    }
    
    //잘못된 이메일일 경우
    @ExceptionHandler(MessagingException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public ResponseResult MessagingException(HttpServletRequest req, Exception e) {
    	IdNotFoundException idNotFoundEx = new IdNotFoundException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(idNotFoundEx, "FindPass", "0001", req.getRequestURI().toString()); 
    	return rr;
    }
    
    //이메일 찾기 id가 없을 경우
    @ExceptionHandler(IdNotFoundException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public ResponseResult IdNotFoundException(HttpServletRequest req, Exception e) {
    	IdNotFoundException idNotFoundEx = new IdNotFoundException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(idNotFoundEx, "FindPass", "0002", req.getRequestURI().toString()); 
    	return rr;
    }
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseResult defaultException(HttpServletRequest req, Exception e) {
    	DefaultException defaultException = new DefaultException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(defaultException, "0004", req.getRequestURI().toString()); 
    	return rr;
    }
    
    //회원가입 시 아이디가 존재하는 경우
    @ExceptionHandler(IdDuplicateException.class)
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)
    public ResponseResult IdDuplicateException(HttpServletRequest req, Exception e) {
    	IdDuplicateException idDuplicateEx = new IdDuplicateException(e.getMessage(),e);
    	ResponseResult rr = new ResponseResult(idDuplicateEx, "signup", "0001", req.getRequestURI().toString()); 
    	return rr;
    }
    
}
 