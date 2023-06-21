// Net Salary Calculator
  
  // let basicSalary = 40000;
  // let benefits = 1500;
const calculateGrossSalary = (basicSalary, benefits) => {
  // Calculate gross salary by adding basic salary and benefits allowances
 const grossSalary = basicSalary + benefits;
  return grossSalary;
};

//NHIF deductions
  function calculateNhifDeductions(grossSalary) {
  if (grossSalary > 0){
    if(grossSalary>=0 && grossSalary<= 5999){
      return 150;

    }else if (grossSalary >= 6000 && grossSalary <= 7999) {

       return 300;

    } else if (grossSalary >= 8000 && grossSalary <= 11999) {

      return 400;

    } else if (grossSalary >= 12000 && grossSalary <= 14999) {

      return 500;

    } else if (grossSalary >= 15000 && grossSalary <= 19999) {

      return 600;

    } else if (grossSalary>= 20000 && grossSalary <= 24999) {

      return 750;

    } else if (grossSalary >= 25000 && grossSalary <= 29999) {

      return 850;

    } else if (grossSalary >= 30000 && grossSalary <= 34999) {

      return 900;

    } else if (grossSalary >= 35000 && grossSalary <= 39999) {

      return 950;

    } else if (grossSalary >= 40000 && grossSalary <= 44999) {

      return 1000;

    } else if (grossSalary >= 45000 && grossSalary <= 49999) {

      return 1100;

    } else if (grossSalary >= 50000 && grossSalary <= 59999) {

      return 1200;

    } else if (grossSalary >= 60000 && grossSalary <= 69999) {

      return 1300;

    } else if (grossSalary >= 70000 && grossSalary <= 79999) {

      return 1400;

    } else if (grossSalary >= 80000 && grossSalary<= 89999) {

      return 1500;

    } else if (grossSalary >= 90000 && grossSalary <= 99999) {

      return 1600;

    } else if (grossSalary >= 100000) {

      return 1700;

    }
  }else
  return 'Invalid Gross Salary'
}

 
 //NSSF Deductions

  function calculateNssfDeductions(grossSalary) {

    return grossSalary * 0.06

  }

 

 //PAYEE Deductions

 function calculatePayee(monthlyTaxablePay) {
// monthlyTaxablePay = grossSalary - NSSFDeductions
    if (monthlyTaxablePay <= 24000) {

    return monthlyTaxablePay * 0.1;

    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {

      return monthlyTaxablePay * 0.25;

    } else if (monthlyTaxablePay> 32333) {

      return monthlyTaxablePay * 0.3;

    }

  }


  // Net Salary
    function calculateNetSalary(basicSalary,benefits=0) {
      const grossSalary = calculateGrossSalary(basicSalary,benefits); 
      const monthlyTaxablePay = grossSalary - calculateNssfDeductions(grossSalary)
      
      let netSalary = grossSalary - (calculatePayee(monthlyTaxablePay) + calculateNhifDeductions(grossSalary) +  calculateNssfDeductions(grossSalary));
      return (netSalary + "Ksh");
    
    }

console.log(calculateNetSalary(50000))