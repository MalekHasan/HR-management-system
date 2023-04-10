"use strict";
let empArr = [];
function Employee(empId, fullName, department, level) {
  this.empId = empId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  empArr.push(this);
}
Employee.prototype.calcSalary = function () {
  let min = 0;
  let max = 0;
  if (this.level === "Junior") {
    min = 500;
    max = 1000;
  } else if (this.level == "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else if (this.level === "Senior") {
    min = 1500;
    max = 2000;
  }
  this.salary = Math.floor(Math.random() * (max - min)) + min;
  return this.salary;
};
Employee.prototype.CalcNetSalary = function () {
  let netSalary = this.salary - this.salary * (7.5 / 100);
  return netSalary;
};
Employee.prototype.render = function () {
  return document.write(
    `<h2>Employee Name: ${
      this.fullName
    }</h2> and his/her <h2>Salary ${this.calcSalary()} </h2> <hr/>`
  );
};
let ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior");
let lana = new Employee("1001", "Lana Ali", "Finance", "Senior");
let tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior");
let safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee("1004", "Omar Zaid", "Development", "Senior");
let rana = new Employee("1005", "Rana Saleh", "Development", "Junior");
let hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior");
for (let i = 0; i < empArr.length; i++) {
  empArr[i].render();
}
