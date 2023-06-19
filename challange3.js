// Net Salary Calculator

//NHIF deductions
  function calculateNhifDeductions(grossSalary) {

    let deduction = 0;

 

    if (grossSalary >= 6000 && grossSalary <= 7999) {

      deduction = 300;

    } else if (grossSalary >= 8000 && grossSalary <= 11999) {

      deduction = 400;

    } else if (grossSalary >= 12000 && grossSalary <= 14999) {

      deduction = 500;

    } else if (grossSalary >= 15000 && grossSalary <= 19999) {

      deduction = 600;

    } else if (grossSalary>= 20000 && grossSalary <= 24999) {

      deduction = 750;

    } else if (grossSalary >= 25000 && grossSalary <= 29999) {

      deduction = 850;

    } else if (grossSalary >= 30000 && grossSalary <= 34999) {

      deduction = 900;

    } else if (grossSalary >= 35000 && grossSalary <= 39999) {

      deduction = 950;

    } else if (grossSalary >= 40000 && grossSalary <= 44999) {

      deduction = 1000;

    } else if (grossSalary >= 45000 && grossSalary <= 49999) {

      deduction = 1100;

    } else if (grossSalary >= 50000 && grossSalary <= 59999) {

      deduction = 1200;

    } else if (grossSalary >= 60000 && grossSalary <= 69999) {

      deduction = 1300;

    } else if (grossSalary >= 70000 && grossSalary <= 79999) {

      deduction = 1400;

    } else if (grossSalary >= 80000 && grossSalary<= 89999) {

      deduction = 1500;

    } else if (grossSalary >= 90000 && grossSalary <= 99999) {

      deduction = 1600;

    } else if (grossSalary >= 100000) {

      deduction = 1700;

    }

 

    return deduction;

  }

 

  //NSSF Deductions

  function calculateNssfDeductions(pay) {

    return pay * 0.06

  }

 

 //PAYEE Deductions

 function calculatePayee(monthlyTaxablePay) {

    let payee = 0;

 

    if (monthlyTaxablePay <= 24000) {

      taxRate = 0.1;

    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {

      taxRate = 0.25;

    } else if (monthlyTaxablePay> 32333) {

      taxRate = 0.3;

    }

 

    return rate;

  }


  // Net Salary
    function calculateNetSalary(grossSalary) {
      let monthlyTaxablePay = grossSalary
      // let taxRate = payeeDeductions
      
      let payee= calculatePayee(grossSalary * taxRate)//Rate is in %

      let nhifDeductions = calculateNhifDeductions(nhifDeductions)
      
      let nssfDeductions = calculateNssfDeductions(nssfDeductions)
      
      let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
      console.log(netSalary + "Ksh");
      return netSalary
    }

 let salary = parseInt("7000")//input gross salsary

 calculateNetSalary(salary)

 console.logcalculateNetSalary(grossSalary= 50000);