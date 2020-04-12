package com.momato.tomato;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class Test {
	
	@RequestMapping()
	public void test2() {
		System.out.println("도착");
	}
	@RequestMapping("/websocket")
	public String test() {
		return "socket";
	}
}
