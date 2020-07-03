package com.momato.tomato;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momato.tomato.dto.Tomato;

@Service	
public class TomatoServiceImpl implements TomatoService{

	@Autowired
	TomatoMapper mapper;
	
	@Override
	public List<Tomato> retrieveTomato(Tomato tomato) {
		return mapper.selectTomato(tomato);
	}
	
	@Override
	public Tomato retrieveOneTomato(int tomatoIdx) {
		return mapper.selectOneTomato(tomatoIdx);
	}
	
	@Override
	public List<Tomato> retrieveTomatoByTemplateIdx(int templateIdx) {
		return mapper.selectTomatoByTemplateIdx(templateIdx);
	}
	
	@Override
	public void addTomato(Tomato tomato) {
		mapper.insertTomato(tomato);
	}
	
	@Override
	public void addCalledTomato(Tomato tomato) {
		mapper.insertCalledTomato(tomato);
	}
	
	@Override
	public void addTemplateTomato(Tomato tomato) {
		mapper.insertTemplateTomato(tomato);
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
