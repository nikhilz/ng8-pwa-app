import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../entity/Employee';
import {  Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';
import { MessagesService } from '../services/message.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [MessageService]
})
export class EmployeeListComponent implements OnInit {

  _listFilterBy: string;
  allEmployees: Employee[];
  filteredList: Employee[];
  message: string;
  subscription: Subscription;

  // Service injected in constructor
  constructor(private router:Router,private employeeService:EmployeeService,
    private messageService: MessagesService,private ms: MessageService, private cd: ChangeDetectorRef) { 
      
    }

  // Initializes all employees list from employee service
  ngOnInit() {
   this.allEmployees = this.employeeService.getAllEmployees()
    this.filteredList = this.allEmployees;
    this._listFilterBy='';

    this.subscription = this.messageService.getMessage().subscribe(message => {
       
        
      this.set_message(message.text);
      this.message = message.text;
      //this.ms.add({severity:'info', summary:'Service Message', detail: this.message});
      console.group('message :' + JSON.stringify(this.get_message()));
      this.subscription.unsubscribe();
      this.set_message(this.message);
      this.toastserv(this.get_message());
     
  }, (error) => {console.log(error)
  }, ()=>{
   
   
   
  }
   );
   
  }

  

   // Gets filter by value from the search box
  get listFilterBy():string{
    return this._listFilterBy;
  }

  // Sets filter by value from the search box
  set listFilterBy(value:string){
    this._listFilterBy = value; 
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy):this.allEmployees;
  }


  performFilter(filterBy:string){
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((emp:Employee) => (emp.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 
    || emp.lastname.toLocaleLowerCase().indexOf(filterBy)!== -1));

  }
//ngAfterViewInit
  toastserv(str:string) {
    this.message = str;
    console.group(' toastserv message :' + str);
   // setTimeout(() => {
      this.ms.add({
        severity: "info",
        summary: "Success Message",
        detail: str
      });
 // }, 2000);
 

   
}





set_message(str:string){
  this.message = str;
}
get_message():string{
  return this.message;
}


  //refresh after delete
  refreshList(){
    this.employeeService.getAllEmployees();
  
    this.filteredList = this.allEmployees;
  }

  //navigate to addEmployee component
  addEmployee(){
    this.router.navigate(["AddEmployee"]);
  }
  
  


}
