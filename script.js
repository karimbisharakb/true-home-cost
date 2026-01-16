function calculate() {
  // Get input values
  let price = parseFloat(document.getElementById('price').value) || 0;
  let down = parseFloat(document.getElementById('down').value) || 0;
  let rate = parseFloat(document.getElementById('rate').value) || 0;
  let years = parseFloat(document.getElementById('years').value) || 0;
  let tax = parseFloat(document.getElementById('tax').value) || 0;
  let insurance = parseFloat(document.getElementById('insurance').value) || 0;
  let maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
  let utilities = parseFloat(document.getElementById('utilities').value) || 0;
  let condo = parseFloat(document.getElementById('condo').value) || 0;

  // Mortgage calculation
  let loan = price - (price * down / 100);
  let monthlyRate = rate / 100 / 12;
  let payments = years * 12;
  let mortgage = 0;
  if (monthlyRate > 0) {
    mortgage = loan * monthlyRate / (1 - Math.pow(1 + monthlyRate, -payments));
  } else {
    mortgage = loan / payments;
  }

  // Maintenance monthly
  let maintenanceMonthly = (price * (maintenance/100)) / 12;

  // Total monthly cost
  let total = mortgage + tax + insurance + maintenanceMonthly + utilities + condo;

  // Show result
  document.getElementById('output').innerText = "$" + total.toFixed(2);
}
