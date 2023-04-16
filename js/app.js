"use strict";
let empArr = [];
let empForm = document.getElementById("empForm");
let container = document.getElementById("container");
function Employee(empId, fullName, department, level) {
  this.empId = empId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.empImage = "../img/Contact us-pana.png";
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
  let divContent = document.createElement("div");
  divContent.className = "content";
  let empFullName = document.createElement("h2");
  let empSalary = document.createElement("h2");
  let empImg = document.createElement("img");
  let empDept = document.createElement("h3");
  let empLevel = document.createElement("h3");
  empImg.src = this.empImage;
  empFullName.textContent = `Name: ${this.fullName}`;
  empSalary.textContent = `Salary: ${this.calcSalary()}`;
  empDept.textContent = `Department: ${this.department}`;
  empLevel.textContent = `Level: ${this.level}`;
  divContent.appendChild(empImg);
  divContent.appendChild(empFullName);
  divContent.appendChild(empSalary);
  divContent.appendChild(empDept);
  divContent.appendChild(empLevel);
  container.appendChild(divContent);
  //add (line:33-38) when we took the new lecture
  // return document.write(
  //   `<h2>Employee Name: ${
  //     this.fullName
  //   }</h2> and his/her <h2>Salary ${this.calcSalary()} </h2> <hr/>`
  // );
};
empForm.addEventListener("submit", handelForm);
function handelForm(event) {
  event.preventDefault();
  let fullName = event.target.fullName.value;
  let empDepartment = event.target.dept.value;
  let empLevel = event.target.level.value;
  let empImg = event.target.img.value;
  let empId = createEmpID();
  let newEmp = new Employee(empId, fullName, empDepartment, empLevel);
  newEmp.empImage = empImg;
  newEmp.calcSalary();
  newEmp.CalcNetSalary();
  newEmp.render();
  setData(empArr);
  console.log(newEmp);
}
function createEmpID() {
  return Math.floor(Math.random() * (10000 - 1000)) + 1000;
}
function setData(empArray) {
  localStorage.setItem("employeeData", JSON.stringify(empArray));
}
function getData() {
  let dataRetreived = JSON.parse(localStorage.getItem("employeeData"));
  if (dataRetreived != null) {
    for (let i = 0; i < dataRetreived.length; i++) {
      new Employee(
        dataRetreived[i].empId,
        dataRetreived[i].fullName,
        dataRetreived[i].department,
        dataRetreived[i].level,
        dataRetreived[i].empImage
      );
      empArr[i].calcSalary();
      empArr[i].CalcNetSalary();
      empArr[i].render();
    }
    console.log(empArr);
  }
}
 let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
 let lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
 let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
 let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
 let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
 let rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
 let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
getData();
