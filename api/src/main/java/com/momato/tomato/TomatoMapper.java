package com.momato.tomato;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.momato.tomato.dto.Tomato;

@Mapper
public interface TomatoMapper {
	List<Tomato> selectTomato(Tomato tomato);
	Tomato selectOneTomato(int tomatoIdx);
	List<Tomato> selectTomatoByTemplateIdx(int templateIdx);
	void insertTomato(Tomato tomato);
	void insertTemplateTomato(Tomato tomato);
	void deleteTomato(int tomatoIdx);
	void updateTomato(Tomato tomato);
}
