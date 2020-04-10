package com.momato.template;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.momato.template.dto.Template;

@Mapper
public interface TemplateMapper {
	List<Template> selectTemplate(String memberId);
	Template selectOneTemplate(int templateIdx);
	void insertTemplate(Template template);
	void updateTemplate(Template template);
	void deleteTemplate(int templateIdx);
}
