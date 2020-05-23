package com.momato.util;

public class JwtProperties {
	public static final String SECRET = "Secret";
    public static final long EXPIRATION_TIME =  (8640000000L); // 100 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}