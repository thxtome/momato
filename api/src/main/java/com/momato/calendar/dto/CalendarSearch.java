package com.momato.calendar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CalendarSearch {
  private int year;
  private int month;
  private String memberId;
}
