// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
    const taxRate =  0.25// 25% tax rate on average
    const nhifRate = 0.45; // 4.5% NHIF deduction rate on average
    const nssfRate = 0.06; // 6% NSSF deduction rate on average
  
    
    const grossSalary = basicSalary + contibutionBenefits;
  
    
    const payee= grossSalary * taxRate;
  

    const nhifDeductions = grossSalary * nhifRate;
  
    
    const nssfDeductions = grossSalary * nssfRate;
  
    
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
   
    console.log(netSalary + "Ksh");
  }
  

  console.logcalculateNetSalary(grossSalary= 50000);
  