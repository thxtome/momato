package com.momato.member;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.member.dto.Member;
import com.momato.member.dto.Result;
import com.momato.util.JwtUtil;

@RestController
@RequestMapping("/members")
public class MemberController {
	
	@Autowired
	MemberService service;
	
	@Autowired
	JwtUtil jwtUtil; 
	
    @PostMapping(value="/signin")
    public Result signin(Member loginMem, HttpServletResponse response){
    	Result result = Result.successInstance();
    	Member m = service.retrieveMember(loginMem);
        String token = jwtUtil.create("member",m,"momato");
        response.setHeader("Authorization", token);
        result.setData(m);
        return result;
    }
}
