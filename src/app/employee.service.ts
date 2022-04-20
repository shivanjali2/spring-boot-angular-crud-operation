import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  baseURL="http://localhost:8080/api/v1/employee";
  id?:number;

  constructor(private httpClient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }


  addEmployee(employee?:Employee):Observable<object>
  {
    return this.httpClient.post<Object>(`${this.baseURL}`,employee);
  }

  getId(getId?:number)
  {
    this.id=getId;
  }


  getEmployeeByID(id?:number):Observable<object>
  {
    return this.httpClient.get<object>(`${this.baseURL}/${this.id}`);
  }

  deleteEmployeeById(id?:number):Observable<object>
  {
    return this.httpClient.delete<object>(`${this.baseURL}/${id}`);
  }
}
