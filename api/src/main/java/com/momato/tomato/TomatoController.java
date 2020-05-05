package com.momato.tomato;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
import com.momato.tomato.dto.Param;
import com.momato.tomato.dto.Tomato;

@RestController
@RequestMapping("/tomatos")
public class TomatoController {
	
	@Autowired
	TomatoService service;
	
	// 토마토등록일 또는 템플릿인덱스로 조회
	@GetMapping()
	public ResponseResult retrieveTomato(@RequestParam(defaultValue = "0") int templateIdx, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date tomatoDate, @AuthenticationPrincipal String memberId) {
		Tomato tomato = new Tomato();
		tomato.setTemplateIdx(templateIdx);
		tomato.setTomatoDate(tomatoDate);
		tomato.setMemberId(memberId);
		return new ResponseResult(HttpStatus.OK, service.retrieveTomato(tomato));
	}
	
	// 토마토인덱스로 조회
	@GetMapping("/{tomatoIdx}")
	public ResponseResult retrieveOneTomato(@PathVariable int tomatoIdx) {
		return new ResponseResult(HttpStatus.OK,service.retrieveOneTomato(tomatoIdx));
	}
	
	@PostMapping()
	public ResponseResult addTomato(@RequestBody Param param, @AuthenticationPrincipal String memberId) {
		String createType = param.getCreateType();
		// 단순 토마토 등록
		if (createType.equals("simple")) {
			Tomato tomato = param.getData();
			tomato.setMemberId(memberId);
			service.addTomato(tomato);
		// 템플릿 복사 후 토마토 등록	
		} else if(createType.equals("copy")) {
			Tomato tomato = new Tomato();
			tomato.setTemplateIdx(param.getTemplateIdx());
			List<Tomato> list = new ArrayList<>();
			list = service.retrieveTomato(tomato);
			for (Tomato t : list) {
			service.addTomato(t);
			}
		}
		System.out.println(param);
		return new ResponseResult(HttpStatus.OK);
	}
	
	// 토마토 삭제
	@DeleteMapping("/{tomatoIdx}")
	public ResponseResult removeTomato(@PathVariable int tomatoIdx) {
		service.removeTomato(tomatoIdx);
		return new ResponseResult(HttpStatus.OK);
	}
	
	// 토마토 수정
	@PutMapping()
	public ResponseResult editTomato(@RequestBody Tomato tomato, @AuthenticationPrincipal String memberId) {
		tomato.setMemberId(memberId);
		service.editTomato(tomato);
		return new ResponseResult(HttpStatus.OK);
	}
	
}
