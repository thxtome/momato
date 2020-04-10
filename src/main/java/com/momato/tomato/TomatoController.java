package com.momato.tomato;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.common.dto.ResponseResult;
import com.momato.tomato.dto.Tomato;

@RestController
@RequestMapping("/tomatos")
public class TomatoController {
	
	@Autowired
	TomatoService service;
	
	@GetMapping()
	public ResponseResult retrieveTomato() {
		return new ResponseResult(HttpStatus.OK, service.retrieveTomato());
	}
	
	@GetMapping("/{tomatoDate}/{tomatoIdx}")
	public ResponseResult retrieveOneTomato(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date tomatoDate, @PathVariable int tomatoIdx) {
		Tomato tomato = new Tomato();
		tomato.setTomatoDate(tomatoDate);
		tomato.setTomatoIdx(tomatoIdx);
		return new ResponseResult(HttpStatus.OK,service.retrieveOneTomato(tomato));
	}
	
	@PostMapping()
	public ResponseResult addTomato(@RequestBody Tomato tomato) {
		service.addTomato(tomato);
		return new ResponseResult(HttpStatus.OK);
	}
	
	@DeleteMapping("/{tomatoIdx}")
	public ResponseResult removeTomato(@PathVariable int tomatoIdx) {
		service.removeTomato(tomatoIdx);
		return new ResponseResult(HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseResult editTomato(@RequestBody Tomato tomato) {
		service.editTomato(tomato);
		return new ResponseResult(HttpStatus.OK);
	}
}
