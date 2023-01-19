package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
            Student fadi = new Student(
                    "Fadi",
                    "Fadi@gmail.com",
                    LocalDate.of(1995, Month.AUGUST,13)
            );

                Student alex = new Student(
                        "Alex",
                        "Alex@gmail.com",
                        LocalDate.of(1993, Month.SEPTEMBER,23)
                );

                repository.saveAll(
                        List.of(fadi,alex)
                );
        };
    }
}
