package com.momato.tomato;

import java.util.List;

import com.momato.tomato.dto.Tomato;

public interface TomatoService {
	public List<Tomato> retrieveTomato();
	public Tomato retrieveOneTomato(int tomatoIdx);
	public void addTomato(Tomato tomato);
	public void removeTomato(int tomatoIdx);
	public void editTomato(Tomato tomato);
}
