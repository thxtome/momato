package com.momato.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.common.dto.ResponseResult;

@RestController
@RequestMapping("/calendar")
public class CalendarController {

	@Autowired
	CalendarService service;
	
	@GetMapping
	public ResponseResult retrieveYearAndMonthTomatos(@AuthenticationPrincipal String memberId, int year, int month) {
		return service.retrieveYearAndMonthTomatos(memberId, year, month);
	}
	
}
