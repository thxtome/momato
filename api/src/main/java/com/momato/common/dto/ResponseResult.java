package com.momato.common.dto;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

import com.momato.exception.AbstractException;
import com.momato.exception.JwtAuthenticationException;

import lombok.Data;

@Data
public class ResponseResult {
	private static final String DEFAULT_KEY = "result";
	private int code;
	private boolean status;
	private String message;
	private Date timestamp;
	private Map<String, Object> data;
	private ErrorResult error;
	
	public ResponseResult() {}

	public ResponseResult(HttpStatus httpStatus) {
		this.data = new HashMap<>();
		this.code = httpStatus.value();
		this.status = (httpStatus.isError()) ? false : true;
		this.message = httpStatus.getReasonPhrase();
		this.timestamp = new Date();
	}

	public ResponseResult(AbstractException ex, String errorCode, String referedUrl) {
		HttpStatus httpStatus = ex.getHttpStatus();
		this.data = new HashMap<>();
		this.code = httpStatus.value();
		this.status = (httpStatus.isError()) ? false : true;
		this.message = httpStatus.getReasonPhrase();
		this.error = new ErrorResult(errorCode, "Common", ex.getMessage(), referedUrl);
		this.timestamp = new Date();
	}
	
	public ResponseResult(AbstractException ex, String category, String errorCode, String referedUrl) {
		HttpStatus httpStatus = ex.getHttpStatus();
		this.data = new HashMap<>();
		this.code = httpStatus.value();
		this.status = (httpStatus.isError()) ? false : true;
		this.message = httpStatus.getReasonPhrase();
		this.error = new ErrorResult(errorCode, "Common", ex.getMessage(), referedUrl);
		this.timestamp = new Date();
	}
	
	public ResponseResult(JwtAuthenticationException ex, String category, String errorCode, String referedUrl) {
		HttpStatus httpStatus = ex.getHttpStatus();
		this.data = new HashMap<>();
		this.code = httpStatus.value();
		this.status = (httpStatus.isError()) ? false : true;
		this.message = httpStatus.getReasonPhrase();
		this.error = new ErrorResult(errorCode, category, ex.getMessage(), referedUrl);
		this.timestamp = new Date();
	}
	

	public ResponseResult(HttpStatus status, Object result) {
		this(status);
		this.data.put(DEFAULT_KEY, result);
	}
	
	public ResponseResult(HttpStatus status, Object result, String key) {
		this(status);
		this.data.put(key, result);
	}

	public void add(String key, Object result) {
		this.data.put(key, result);
	}

	public void remove(String key) {
		this.data.remove(key);
	}
}
