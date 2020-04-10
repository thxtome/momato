package com.momato.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.google.gson.Gson;

@ControllerAdvice
public class ExceptionController {

	@ResponseBody
	@ExceptionHandler(Exception.class)
	@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR, reason="Internal server error")
	public String exceptionTest(HttpServletRequest req, Exception e) {
//		TestException te = new TestException(e.getMessage(),e);
//		ResponseResult rr = new ResponseResult(te,req.getRequestURI().toString()); 
		Gson gson = new Gson();
		return "aa";
	}	
}
 