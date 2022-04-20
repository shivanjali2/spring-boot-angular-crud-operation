package com.springboot.rest.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.rest.Entity.Employee;
import com.springboot.rest.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins ="http://localhost:4200/")
public class EmployeeRestcontroller {
	
	@Autowired
	EmployeeRepository respo;
	
	@GetMapping("/message")
	public String DisplayMessage()
	{
		return "Hello Employee";
	}
	
	@GetMapping("/employee")
	public List<Employee> FindAll()
	{
		return respo.findAll();
	}
	
	@PostMapping("/employee")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		
		return respo.save(employee);
	}
  
    @GetMapping("/employee/{id}")
	public Optional<Employee> getbyid(@PathVariable int id)
	{
    	return respo.findById(id);
    	
	}
    
    @PutMapping("/employee/{id}")
    public Employee updatedetails(@PathVariable int id,@RequestBody Employee employee)
    
    {
    	
    	Employee emp1=respo.getById(id);
    	emp1.setId(employee.getId());
    	emp1.setFirst_name(employee.getFirst_name());
    	emp1.setEmail(employee.getEmail());
    	emp1.setPhno(employee.getPhno());
    	
    	return respo.save(emp1);
    }
    
    @DeleteMapping("/employee/{id}")
    public String deleteEmployeebyid(@PathVariable int id)
     
    {
    	Employee em = respo.getById(id);
    	respo.delete(em);
    	return "A record Succesfully delete";
    	
    }
}
