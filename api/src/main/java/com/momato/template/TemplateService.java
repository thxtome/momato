package com.momato.template;

import java.util.List;

import com.momato.template.dto.Template;

public interface TemplateService {
	public List<Template> retrieveTemplate(String memberId);
	public Template retrieveOneTemplate(int templateIdx);
	public void addTemplate(Template template);
	public void editTemplate(Template template);
	public void removeTemplate(int templateIdx);
}
