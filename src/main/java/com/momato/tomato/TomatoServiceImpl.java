package com.momato.tomato;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momato.tomato.dto.Tomato;

@Service	
public class TomatoServiceImpl implements TomatoService{

	@Autowired
	TomatoMapper mapper;
	
	@Override
	public Tomato retrieveTomato(Tomato tomato) {
		return mapper.selectTomato(tomato);
	}
	
	public void addTomato(Tomato tomato) {
		mapper.insertTomato(tomato);
	}
}
