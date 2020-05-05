package com.momato.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.momato.calendar.dto.CalendarSearch;
import com.momato.common.dto.ResponseResult;

@Service
public class CalendarSerivceImpl implements CalendarService{
	@Autowired
	CalendarMapper mapper;
	
	@Override
	public ResponseResult retrieveYearAndMonthTomatos(String memberId, int year, int month) {
		CalendarSearch cs = new CalendarSearch(year, month, memberId);
		return new ResponseResult(HttpStatus.OK, mapper.selectTomatosForCalendar(cs));
	}

}
