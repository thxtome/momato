package com.momato.tomato;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service	
public class TomatoServiceImpl implements TomatoService{

	@Autowired
	TomatoMapper mapper;

}
