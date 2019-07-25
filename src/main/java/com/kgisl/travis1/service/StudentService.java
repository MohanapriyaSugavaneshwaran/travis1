package com.kgisl.travis1.service;

import java.util.List;

import com.kgisl.travis1.model.Student;


/**
 * StudentService
 */

public interface StudentService {

    public List<Student> getall();
    public Student findStudentByid(int id);
    public void deleteStudentById(int id);

    
}