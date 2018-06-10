import {Employee} from "./Employee";

export class Company{
  empoloyees: Array<Employee>;

  constructor(){
    this.empoloyees = [];
  }

  addEmployee(employee: Employee): void{
    this.empoloyees.push(employee);
  }

  removeEmployee(employee: Employee): void{

  }

  getNetSalary(): void{
    this.empoloyees.forEach(function (employee) {
      console.log('Name: ' + employee.getName() + ' Salary: ' + employee.getSalary());
    })
  }

}
