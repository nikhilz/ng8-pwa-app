import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/Employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../services/message.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: Employee;

  form : FormGroup;

 // Services injected in constructor
 constructor(private employeeService: EmployeeService, private route: ActivatedRoute, 
  private router: Router,private fb: FormBuilder,private messageService:MessagesService) { }

  ngOnInit() {
    var id = this.route.snapshot.params["id"];
   this.employee = this.employeeService.getEmployee(id);
    this.form = this.fb.group({
      firstname: [this.employee.firstname,Validators.required],
      lastname: [this.employee.lastname,Validators.required],
      age: [this.employee.age,Validators.required],
      designation: [this.employee.designation,Validators.required]
    });

  }
  get f(){
    return this.form.controls;
 }

  //update Employee and navigate to Employees
  updateEmployee(){
   // alert('------');
    this.employee.firstname = this.form.controls['firstname'].value;
    this.employee.lastname = this.form.controls['lastname'].value;
    this.employee.age = this.form.controls['age'].value;
    this.employee.designation = this.form.controls['designation'].value;

    this.employeeService.updateEmployee(this.employee);
    this.sendMessage('Successfully Updated!');
    this.router.navigate(["Employees"]);
   
  }

  //cancel update 
  cancelUpdate(){
    this.router.navigate(["Employees"]);
  }

  sendMessage(data:string): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(data);
}

clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
}


}
