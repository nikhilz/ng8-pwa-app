import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/Employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employee: Employee;
  form : FormGroup;

  constructor(private employeeService:EmployeeService, private router: Router
   ,private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      age: ['',Validators.required],
      designation: ['',Validators.required]
    });
  }

  //cancel addition 
  canceladd(){
    this.router.navigate(["Employees"]);
  }

  addEmployee(){

    this.employee = new Employee(this.makeRandomID(),this.form.controls['firstname'].value,
    this.form.controls['lastname'].value,this.form.controls['age'].value,this.form.controls['designation'].value);
    
    this.employeeService.addEmployee(this.employee);
    
    this.router.navigate(["Employees"]);
  }

   // Creates random id for employee
   makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


}
