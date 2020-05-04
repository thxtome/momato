package com.momato.common.dto;

import lombok.Data;

@Data
public class ErrorResult {
    private static final long serialVersionUID = 1L;
    private String category;
    private String code;
    private String errorMessage;
    private String referedUrl;
    public ErrorResult(String code, String category, String errorMessage, String referedUrl) {
    	this.category = category;
        this.code = code;
        this.errorMessage = errorMessage;
        this.referedUrl = referedUrl;
    }
}
