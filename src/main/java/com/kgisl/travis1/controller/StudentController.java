package com.kgisl.travis1.controller;

import java.util.List;

import com.kgisl.travis1.model.Student;
import com.kgisl.travis1.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * StudentController
 */
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("/")
    public  @ResponseBody ResponseEntity<List<Student>> show() {
        return new ResponseEntity<>(studentService.getall(), HttpStatus.OK);
    }
    @DeleteMapping(value="/{id}", headers ="Accept=application/json")
    public ResponseEntity<Student> deleteStudent(@PathVariable("id") int id){
        Student student = studentService.findStudentByid(id);
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        studentService.deleteStudentById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
 
}