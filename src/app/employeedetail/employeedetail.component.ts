import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/Employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent{

  //input from parent component
  @Input() employee: Employee;

  // Output variable used to tell the parent component to refesh the employee list after successful delete
  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Service injected in constructor
  constructor(private employeeSevice:EmployeeService, private router:Router) {}

  editEmployee(id:String){
    this.router.navigate(["EditEmployee/"+id]);
  }

  deleteEmployee(emp:Employee){
    var result = confirm("Are you sure?");
    if(result){
      this.employeeSevice.deleteEmployee(emp.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    }
  }

}
