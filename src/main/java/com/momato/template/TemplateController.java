package com.momato.template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/template")
public class TemplateController {
	
	@Autowired
	TemplateService service;
	
	@GetMapping("/hello")
	public String helloWorld() {
		System.out.println("asdsadsadas");
		return "helloaaaaaaaaaaaaaaaaaaaaaa";
	}

}
