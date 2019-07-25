package com.kgisl.travis1.repositry;

import com.kgisl.travis1.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * StudentRepositry
 */
public interface StudentRepositry extends  JpaRepository<Student,Integer>{

    
}