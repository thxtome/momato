package com.momato.common.dto;

import lombok.Data;

@Data
public class ErrorResult {
    private static final long serialVersionUID = 1L;
    private String category;
    private String errorCode;
    private String errorMessage;
    private String referedUrl;
    public ErrorResult(String errorCode, String category, String errorMessage, String referedUrl) {
    	this.category = category;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.referedUrl = referedUrl;
    }
}
