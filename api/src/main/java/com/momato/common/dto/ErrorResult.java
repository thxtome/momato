package com.momato.common.dto;

import lombok.Data;

@Data
public class ErrorResult {
    private static final long serialVersionUID = 1L;
    private int code;
    private String errorMessage;
    private String referedUrl;
    public ErrorResult(int code, String errorMessage, String referedUrl) {
        this.code = code;
        this.errorMessage = errorMessage;
        this.referedUrl = referedUrl;
    }
}
