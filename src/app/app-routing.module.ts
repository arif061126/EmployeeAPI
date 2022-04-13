import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path: "employees",
    component: EmployeeListComponent,
    pathMatch:"full"
  },
  {
    path: "",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path: "add-employee",
    component:AddEmployeeComponent,
    pathMatch:"full"
  },
  {
    path: "update-employee/:id",
    component:UpdateEmployeeComponent,
    pathMatch:"full"
  },
  {
    path: "view-employee/:id",
    component:ViewEmployeeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
