function calculateSavings() {
    const monthlyBill = parseFloat(document.getElementById('monthlyBill').value);
    
    if (!monthlyBill || monthlyBill <= 0) {
      alert('Please enter a valid monthly electricity bill.');
      return;
    }

    // Example calculation logic
    const systemSize = monthlyBill / 900; // For example, 1000 Rs savings per kW
    const spaceRequired = systemSize * 85; // Assuming 100 sqft per kW
    const annualEnergy = systemSize * 1510; // Assuming 1500 units generated per kW annually
    const price = systemSize * 60500; // Example: 50,000 Rs per kW system cost
    const annualSavings = monthlyBill * 12;
    const subsidy = price * 0.29; // Assuming 20% subsidy

    // Updating the UI
    document.getElementById('systemSize').innerText = `System Size: ${systemSize.toFixed(2)} kW`;
    document.getElementById('spaceRequired').innerText = `Space Required: ${spaceRequired.toFixed(2)} sqft`;
    document.getElementById('annualEnergy').innerText = `Annual Energy Generated: ${annualEnergy.toFixed(2)} Units`;
    document.getElementById('price').innerText = `Price (Excluding Subsidy): ₹ ${price.toFixed(2)}`;
    document.getElementById('annualSavings').innerText = `Annual Savings: ₹ ${annualSavings.toFixed(2)}`;
    document.getElementById('subsidy').innerText = `Subsidy: ₹ ${subsidy.toFixed(2)}`;
  }