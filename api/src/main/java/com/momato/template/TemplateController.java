package com.momato.template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.momato.common.dto.ResponseResult;
import com.momato.template.dto.Template;

@RestController
@RequestMapping("/templates")
public class TemplateController {
	
	@Autowired
	TemplateService service;
	
	// 사용자의 모든 템플릿 조회
	@GetMapping("/{memberId}")
	public ResponseResult retrieveTemplate(@PathVariable String memberId) {
		return new ResponseResult(HttpStatus.OK, service.retrieveTemplate(memberId));
	}
	
	// 특정 템플릿 조회
	@GetMapping()
	public ResponseResult retrieveOneTemplate(@RequestParam int templateIdx) {
		return new ResponseResult(HttpStatus.OK,service.retrieveOneTemplate(templateIdx));
	}
	
	@PostMapping()
	public ResponseResult addTemplate(@RequestBody Template template) {
		service.addTemplate(template);
		return new ResponseResult(HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseResult editTemplate(@RequestBody Template template) {
		service.editTemplate(template);
		return new ResponseResult(HttpStatus.OK);
	}
	
	@DeleteMapping("/{templateIdx}")
	public ResponseResult removeTemplate(@PathVariable int templateIdx) {
		service.removeTemplate(templateIdx);
		return new ResponseResult(HttpStatus.OK);
	}
}
