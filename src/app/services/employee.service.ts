import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 /* employeesRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  employeeRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
*/

//employees: FirebaseListObservable<Employee[]>;
  constructor() { }

  employeeList:Employee[] = [
    {
      "id": "1",
      "firstname": "Lalit",
      "lastname": "Aggarwal",
      "age": 26,
      "designation": "Associate Lead, Technology"
    },
    {
      "id": "2",
      "firstname": "Raju",
      "lastname": "Chacha",
      "age": 50,
      "designation": "Dhaniya"
    },
    {
      "id": "3",
      "firstname": "Kanta",
      "lastname": "bhen",
      "age": 50,
      "designation": "Gixxer wala"
    },
    {
      "id": "4",
      "firstname": "ABC",
      "lastname": "XYZ",
      "age": 50,
      "designation": "BC"
    }
  ];

  // Returns all the employees
  getAllEmployees(){
   return this.employeeList;
  }

  //add Employee
  addEmployee(emp: Employee){
   this.employeeList.push(emp);
    
  }

  //update Employee
  updateEmployee(employee:Employee){
    var updateEmployee = this.employeeList.find(emp => emp.id == employee.id);
    updateEmployee.firstname =  employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
  }

  //delete employee
  deleteEmployee(id:String){
    this.employeeList = this.employeeList.filter(emp => emp.id != id);
  }

  //return one Employee by ID
  getEmployee(id: string){
    return this.employeeList.find(emp => emp.id == id);
  
  }


}
