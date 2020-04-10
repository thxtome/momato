package com.momato.template;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momato.template.dto.Template;

@Service	
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateMapper mapper;

	@Override
	public List<Template> retrieveTemplate(String memberId) {
		return mapper.selectTemplate(memberId);
	}

	@Override
	public Template retrieveOneTemplate(int templateIdx) {
		return mapper.selectOneTemplate(templateIdx);
	}

	@Override
	public void addTemplate(Template template) {
		mapper.insertTemplate(template);
	}

	@Override
	public void editTemplate(Template template) {
		mapper.updateTemplate(template);
	}

	@Override
	public void removeTemplate(int templateIdx) {
		mapper.deleteTemplate(templateIdx);
	}

}
