package com.momato.tomato;

import com.momato.tomato.dto.Tomato;

public interface TomatoService {
	public Tomato retrieveTomato(Tomato tomato);
	public void addTomato(Tomato tomato);
	public void removeTomato(int tomatoIdx);
	public void editTomato(Tomato tomato);
}
