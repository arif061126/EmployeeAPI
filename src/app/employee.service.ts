import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8181/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  //getEmployeeList(): Observable<Employee[]>{ //alternatively we can also use without it
  getEmployeeList(){
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  //add employee
  addEmployee(employee: Employee) {
    return this.httpClient.post(`${this.baseURL}/add-employee`, employee);
  }

  //get employees by id
  //as we need to do it parallelly with backend as well
  //public Optional<Employee> getEmployeeById(@PathVariable Long employeeId)
  //use this method to update employee
  getEmployeeById(id: number) {
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  //update employee by ID
  updateEmployeeById(id: number, employee:Employee) {
    return this.httpClient.put(`${this.baseURL}/employees/${id}`, employee);
  }


  //delete employee by id
  deleteEmployeeById(id: number) {
    return this.httpClient.delete(`${this.baseURL}/employees/${id}`);
  }

}
