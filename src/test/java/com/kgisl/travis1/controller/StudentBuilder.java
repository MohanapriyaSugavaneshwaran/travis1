package com.kgisl.travis1.controller;

import com.kgisl.travis1.model.Student;

/**
 * StudentBuilder
 */
public class StudentBuilder {

    private Student student=new Student();

    public StudentBuilder id(int l)
    {
        student.setId(l);
        return this;
    }
    public StudentBuilder name(String name)
    {
        student.setName(name);
        return this;
    }
    public Student build()
    {
        return student;
    }
}