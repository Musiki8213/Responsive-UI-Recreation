// ==========================
// FORM TOGGLING
// ==========================
const fileForm = document.getElementById("fileTransDiv");
const temForm = document.getElementById("tempDiv");
const scieForm = document.getElementById("scientDiv");
const metricform = document.getElementById("metricDiv");

function hideAllForms() {
  fileForm.style.display = "none";
  temForm.style.display = "none";
  scieForm.style.display = "none";
  metricform.style.display = "none";
}

function toggleForm(form) {
  hideAllForms();
  form.style.display = (form.style.display === "block") ? "none" : "block";
}

// Buttons to show forms
document.getElementById("FileTransferBtn").addEventListener("click", () => toggleForm(fileForm));
document.getElementById("TempetatureBtn").addEventListener("click", () => toggleForm(temForm));
document.getElementById("ScientificBtn").addEventListener("click", () => toggleForm(scieForm));
document.getElementById("MetricBtn").addEventListener("click", () => toggleForm(metricform));


// ==========================
// FILE TRANSFER CALC
// ==========================
const sizeInput = document.getElementById("sizeCounter");
const speedInput = document.getElementById("speedCounter");
const sizeUnit = document.getElementById("sizeBits");
const speedUnit = document.getElementById("speedBits");
const fileFinalResult = document.getElementById("fileResults");

document.getElementById("fileConvertBtn").addEventListener("click", () => {
  const sizeValue = parseFloat(sizeInput.value);
  const speedValue = parseFloat(speedInput.value);

  if (isNaN(sizeValue) || isNaN(speedValue)) {
    fileFinalResult.value = "Enter valid numbers";
    return;
  }

  let sizeBits;
  switch (sizeUnit.value) {
    case "kilobytes": sizeBits = sizeValue * 1024 * 8; break;
    case "megabytes": sizeBits = sizeValue * 1024 * 1024 * 8; break;
    case "gigabytes": sizeBits = sizeValue * 1024 * 1024 * 1024 * 8; break;
    default: sizeBits = 0;
  }

  let speedBits;
  switch (speedUnit.value) {
    case "kilobits": speedBits = speedValue * 1000; break;
    case "megabits": speedBits = speedValue * 1_000_000; break;
    case "gigabits": speedBits = speedValue * 1_000_000_000; break;
    default: 
      fileFinalResult.value = "Invalid speed unit";
      return;
  }

  const totalSeconds = sizeBits / speedBits;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  fileFinalResult.value = `${hours}h ${minutes}m ${seconds}s`;
});


// ==========================
// TEMPERATURE CONVERT
// ==========================
document.getElementById("tempConvertBtn").addEventListener("click", () => {
  const degreeNumber = parseFloat(document.getElementById("convertNumber").value);
  const selectedOption = document.getElementById("degree").value;
  const finalDegreeResults = document.getElementById("degreeResult");

  if (isNaN(degreeNumber)) {
    finalDegreeResults.value = "Enter a valid number";
    return;
  }

  if (selectedOption === "celsius") {
    finalDegreeResults.value = `${(degreeNumber * 9/5 + 32).toFixed(2)}°F`;
  } else if (selectedOption === "fahrenheit") {
    finalDegreeResults.value = `${((degreeNumber - 32) * 5/9).toFixed(2)}°C`;
  }
});


// ==========================
// SCIENTIFIC CONVERT
// ==========================
document.getElementById("scientificConvertBtn").addEventListener("click", () => {
  const input = parseFloat(document.getElementById("standardNumber").value);
  const output = document.getElementById("scientificOutput");

  if (isNaN(input)) {
    output.value = "Enter a valid number";
    return;
  }

  output.value = input.toExponential();
});


// ==========================
// METRIC CONVERTER
// ==========================
document.getElementById("metricConvertBtn").addEventListener("click", () => {
  const value = parseFloat(document.getElementById("valueNumber").value);
  const fromUnit = document.getElementById("metricFromValues").value;
  const toUnit = document.getElementById("metricToValues").value;
  const resultField = document.getElementById("metricResult");

  if (isNaN(value)) {
    resultField.value = "Enter a valid number";
    return;
  }

  const units = {
    "giga": 1e9,
    "mega": 1e6,
    "kilo": 1e3,
    "base unit": 1,
    "milli": 1e-3,
    "micro": 1e-6
  };

  if (!units[fromUnit] || !units[toUnit]) {
    resultField.value = "Invalid units";
    return;
  }

  const result = value * (units[fromUnit] / units[toUnit]);
  resultField.value = result;
});
