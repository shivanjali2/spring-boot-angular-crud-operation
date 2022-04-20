import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  employee: Employee=new Employee();
  constructor(private router:Router,private empService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  updateEmployee()
  {
    console.log(this.employee);
    this.router.navigate(['update-employee'])
  }

  getEmployeeById()
  {
    this.empService.getEmployeeByID().subscribe(data=>{
      this.employee=data;
    });
  }

}
