package com.momato.tomato;

import com.momato.tomato.dto.Tomato;

public interface TomatoService {
	public Tomato retrieveTomato(Tomato tomato);
	public void addTomato(Tomato tomato);
}
