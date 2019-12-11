import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';


const routes: Routes = [
  { path:"Employees", component:EmployeeListComponent },
  { path:"EditEmployee/:id", component:EditemployeeComponent },
  { path:"AddEmployee", component:AddemployeeComponent},
  { path:"**", redirectTo:'Employees' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
