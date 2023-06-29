const bmiForm = document.getElementById("bmi-form");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");

bmiForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const w = parseFloat(weight.value);
  const h = parseFloat(height.value) / 100; 

  if (w && h) {
    const bmi = w / (h * h);
    const bmiCategory = getBMICategory(bmi);
    const bmiResult = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
    result.textContent = bmiResult;
  }
});

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }
  else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } 
  else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } 
  else {
    return "Obesity";
  }
}
