"use strict";
let tableData = document.getElementById("dataDept");
let tableFooter = document.getElementById("tableFooter");
let dataRetreived;
let numOfAdmin = 0;
let numOfFin = 0;
let numOfMarket = 0;
let numOfDev = 0;
let sumSalrayOfAdmin = 0;
let sumSalrayOfFin = 0;
let sumSalrayOfMarket = 0;
let sumSalrayOfDev = 0;
function getData() {
  dataRetreived = JSON.parse(localStorage.getItem("employeeData"));
}
getData();
console.log(dataRetreived);
for (let i = 0; i < dataRetreived.length; i++) {
  if (dataRetreived[i].department == "Administration") {
    numOfAdmin++;
    sumSalrayOfAdmin += dataRetreived[i].salary;
  } else if (dataRetreived[i].department == "Finance") {
    numOfFin++;
    sumSalrayOfFin += dataRetreived[i].salary;
  } else if (dataRetreived[i].department == "Marketing") {
    numOfMarket++;
    sumSalrayOfMarket += dataRetreived[i].salary;
  } else if (dataRetreived[i].department == "Development") {
    numOfDev++;
    sumSalrayOfDev += dataRetreived[i].salary;
  }
}
let numSum = numOfAdmin + numOfDev + numOfFin + numOfMarket;
let salarySum =
  sumSalrayOfAdmin + sumSalrayOfDev + sumSalrayOfFin + sumSalrayOfMarket;
function renderTable() {
  let adminRow = document.createElement("td");
  let finRow = document.createElement("td");
  let markRow = document.createElement("td");
  let devRow = document.createElement("td");

  adminRow.textContent = `Avg for Administration =${
    sumSalrayOfAdmin ? sumSalrayOfAdmin / numOfAdmin : 0
  }`;
  tableData.appendChild(adminRow);
  finRow.textContent = `Avg for Finance =${sumSalrayOfFin? sumSalrayOfFin / numOfFin:0}`;
  tableData.appendChild(finRow);
  markRow.textContent = `Avg for Marketing =${sumSalrayOfMarket? sumSalrayOfMarket / numOfMarket:0}`;
  tableData.appendChild(markRow);
  devRow.textContent = `Avg for Development =${sumSalrayOfDev?sumSalrayOfDev / numOfDev:0}`;
  tableData.appendChild(devRow);

  let totalNum = document.createElement("td");
  totalNum.textContent = `Total Employees= ${numSum}`;
  tableFooter.appendChild(totalNum);
  let totalAvgSalry = document.createElement("td");
  totalAvgSalry.textContent = `Avg Salray for All Employees= ${
    salarySum / numSum
  }`;
  tableFooter.appendChild(totalAvgSalry);
  let totalSalry = document.createElement("td");
  totalSalry.textContent = `Total Salry Employees= ${salarySum}`;
  tableFooter.appendChild(totalSalry);
}
// console.log(numOfAdmin);
// console.log(numOfDev);
// console.log(numOfFin);
// console.log(numOfMarket);
// console.log(sumSalrayOfAdmin);
// console.log(sumSalrayOfDev);
// console.log(sumSalrayOfFin);
// console.log(sumSalrayOfMarket);
renderTable();
