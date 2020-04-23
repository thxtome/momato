package com.momato;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class MomatoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MomatoApplication.class, args);
	}

}
