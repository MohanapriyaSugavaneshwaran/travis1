package com.kgisl.travis1.service;

import java.util.List;

import com.kgisl.travis1.model.Student;
import com.kgisl.travis1.repositry.StudentRepositry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



/**
 * StudentServiceImpl
 */
@Service
public class StudentServiceImpl implements StudentService {

@Autowired
StudentRepositry studentRepositry;

    @Override
    public List<Student> getall() {
        return studentRepositry.findAll();
    }

    @Override
    public Student findStudentByid(int id) {
        return studentRepositry.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found"));
    }

    @Override
    public void deleteStudentById(int id) {
       studentRepositry.deleteById(id);
    }

    
}