package com.momato.tomato;

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
	
	@Override
	public void addTomato(Tomato tomato) {
		mapper.insertTomato(tomato);
	}

	@Override
	public void removeTomato(int tomatoIdx) {
		mapper.deleteTomato(tomatoIdx);
	}

	@Override
	public void editTomato(Tomato tomato) {
		mapper.updateTomato(tomato);
	}
}
