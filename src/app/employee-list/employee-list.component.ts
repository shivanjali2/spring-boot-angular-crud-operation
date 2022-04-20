import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee?:Employee[];


  constructor(private employeeService:EmployeeService,
    private router:Router) { }

   ngOnInit(): void {
  //    this.employee=[{
  //     id:1,
  //      first_name:"Swati",
  //      email:"swati@gmail.com",
  //      phno:8767509100
  //    },

  //   {
  //     id:2,
  //     first_name:"mega",
  //     email:"mega@gmail.com",
  //     phno:9960846934
  //   },


  //   {
  //     id:3,
  //     first_name:"Aradhya",
  //     email:"aradhya@gmail.com",
  //     phno:9818322323
  //   },
  
  // ];

  this.getAllEmployees();

    
}

   getAllEmployees()
   {
     this.employeeService.getAllEmployee().subscribe(data=>{
       this.employee=data;
     });
   }

   updateEmployeeRecord(id?:number)
   {
     console.log("id=",id)
       this.router.navigate(['update-employee']);
     this.employeeService.getId(id);
      }
 
      deleteEmployeeRecord(id?:number)
      {
        this.employeeService.deleteEmployeeById(id).subscribe();
        this.router.navigate(['employee']);
        window.location.reload();
      }

      
  }
  


