import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    //this.onSubmit();
  }

  onSubmit() {
    console.log(this.employee);

    if (this.employee.employeeEmail == null ||
        this.employee.employeeFirstName == null ||
        this.employee.employeeLastName == null) {
      return;
    }

    this.employeeService.addEmployee(this.employee).subscribe(
      response => {
        console.log(response);
        console.log(this.employee);

        this.router.navigate(["/employees"]);
                
      },
      error => {
        console.log(error);
      }
    );
  }

}
