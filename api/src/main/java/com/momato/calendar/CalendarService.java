package com.momato.calendar;

import com.momato.common.dto.ResponseResult;

public interface CalendarService {
	ResponseResult retrieveYearAndMonthTomatos(String memberId, int year, int month);
}
