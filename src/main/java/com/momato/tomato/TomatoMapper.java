package com.momato.tomato;

import org.apache.ibatis.annotations.Mapper;

import com.momato.tomato.dto.Tomato;

@Mapper
public interface TomatoMapper {
	Tomato selectTomato(Tomato tomato);
	void insertTomato(Tomato tomato);
}
