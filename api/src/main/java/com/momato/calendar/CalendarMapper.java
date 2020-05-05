package com.momato.calendar;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.momato.calendar.dto.CalendarSearch;
import com.momato.calendar.dto.TomatoCount;

@Mapper
public interface CalendarMapper {
	List<TomatoCount> selectTomatosForCalendar(CalendarSearch cs);
}
