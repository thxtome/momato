package com.momato.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Grade {
  private String gradeName; 
  private String gradeImageUrl; 
  private String gradeComment; 
  private String memberId;
}
