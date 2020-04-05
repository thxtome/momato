package com.momato.template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service	
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateMapper mapper;

}
