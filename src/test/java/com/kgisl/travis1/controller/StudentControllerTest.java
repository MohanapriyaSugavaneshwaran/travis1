package com.kgisl.travis1.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import com.kgisl.travis1.model.Student;
import com.kgisl.travis1.service.StudentService;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * StudentControllerTest
 * 
 */
@RunWith(MockitoJUnitRunner.class)
public class StudentControllerTest {

    @Mock
    StudentService studentService;
    @InjectMocks
    StudentController studentController;
    public static List<Student> expected;

    public Student student1 = new StudentBuilder().id(1).name("mahesh").build();
    public Student student2 = new StudentBuilder().id(2).name("aravinth").build();


    
  @Test
  public void showTest() {
    expected = Arrays.asList(student1, student2);
    System.out.println(expected);
   when(studentService.getall()).thenReturn(expected);
    ResponseEntity<List<Student>> actual = studentController.show();
    System.out.println("******************************"+actual.getBody());
    assertNotNull(actual);
    assertEquals(expected, actual.getBody());
    assertEquals(HttpStatus.OK, actual.getStatusCode());
  }
  
  @Test
  public void deleteTeamTest() {
    int id = 1;
    when(studentService.findStudentByid(id)).thenReturn(student1);
    studentController.deleteStudent(id);
    verify(studentService).deleteStudentById(id);
  }

}