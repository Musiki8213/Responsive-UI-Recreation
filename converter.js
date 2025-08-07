function hideAllForms() {
  fileForm.style.display = "none";
  temForm.style.display = "none";
  scieForm.style.display = "none";
  metricform.style.display = "none";
}




//FILE TRANSFER
const fileBtn = document.getElementById("FileTransferBtn");
const fileForm = document.getElementById("fileTransDiv");

//Hiding and showing the div
function fileShow() {
  hideAllForms();
  if (fileForm.style.display === "none" || fileForm.style.display === "") {
    fileForm.style.display = "block";
  } else {
    fileForm.style.display = "none";
  }
}



//Calculations

const sizeInput = document.getElementById("sizeCounter");
const speedInput = document.getElementById("speedCounter");
const sizeUnit = document.getElementById("sizeBits");
const speedUnit = document.getElementById("speedBits");
const fileFinalResult = document.getElementById("fileResults");
const fileConvertBtn = document.getElementById("fileConvertBtn");

let fileResults;

fileConvertBtn.addEventListener("click",function () {

  const sizeValue = parseFloat(sizeInput.value);
  const speedValue = parseFloat(speedInput.value);
  const sizeUnitValue = sizeUnit.value;
  const speedUnitValue = speedUnit.value;

  if (sizeUnitValue === "kilobytes") {
    fileResults = sizeValue * 1024 * 8;
  } 
  else if (sizeUnitValue === "megabytes") {
    fileResults = sizeValue * 1024 * 1024 * 8;
  } 
  else if (sizeUnitValue === "gigabytes") {
    fileResults = sizeValue * 1024 * 1024 * 1024 * 8;
  } 
  else if (speedUnitValue === "kilobits") {
    fileResults = speedValue * 1000;
  } 
  else if (speedUnitValue === "megabits") {
    fileResults = speedValue * 1000000;
  } 
  else if (speedUnitValue === "gigabits") {
    fileResults = speedValue * 1000000000;
  } 
  else {
    fileResults = 0;
  }

   // Convert speed to bits per second
  let speedResuls;
  if (speedUnitValue === "kilobits") {
    speedResuls = speedValue * 1000;
  } else if (speedUnitValue === "megabits") {
    speedResuls = speedValue * 1000000;
  } else if (speedUnitValue === "gigabits") {
    speedResuls = speedValue * 1000000000;
  } else {
    fileFinalResult.value = "Invalid speed unit";
    return;
  }

  fileFinalResult.value = fileResults;

    // Calculate total time in seconds
  const totalSeconds = fileResults / speedResuls;

  // Convert seconds to hours, minutes, seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  fileFinalResult.value = `${hours}h ${minutes}m ${seconds}s`;

});




//======================================================TEMPERATURE=========================================//

//Calculations
const tempConvert = document.getElementById("tempConvertBtn");
const finalDegreeResults = document.getElementById("degreeResult");

tempConvert.addEventListener("click", function () {
  const degreeNumber = parseFloat(
    document.getElementById("convertNumber").value
  );
  const selectedOption = document.getElementById("degree").value;
  let degreeResults;

  if (isNaN(degreeNumber)) {
    finalDegreeResults.value = "Enter a valid number";
    return;
  }

  if (selectedOption == "celsius") {
    degreeResults = (degreeNumber * 9) / 5 + 32;

    finalDegreeResults.value = `${degreeResults}°F`;
  } else if (selectedOption == "fahrenheit") {
    degreeResults = ((degreeNumber - 32) * 5) / 9;
    finalDegreeResults.value = `${degreeResults}°C`;
  }
});

//Hiding and showing the div
const tempBtn = document.getElementById("TempetatureBtn");
const temForm = document.getElementById("tempDiv");

function tempShow() {
  hideAllForms();
  if (temForm.style.display === "none" || temForm.style.display === "") {
    temForm.style.display = "block";
  } else {
    temForm.style.display = "none";
  }
}

//=======================================================SCIENTIFIC===============================================//

//Calculations

const scientificConvertBtn = document.getElementById("scientificConvertBtn");

scientificConvertBtn.addEventListener("click", function () {
  const scientInputNumber = document.getElementById("standardNumber").value;
  const scientificOutputFinal = document.getElementById("scientificOutput");

  if (isNaN(scientInputNumber)) {
    scientificOutputFinal.value = "Enter a valid number";
    return;
  }

  const numberScientificInput = Number(scientInputNumber);
  let scientificOutput = numberScientificInput.toExponential();

  scientificOutputFinal.value = scientificOutput;
});

//Hiding and showing the div

const scieBtn = document.getElementById("ScientificBtn");
const scieForm = document.getElementById("scientDiv");

function scienShow() {
  hideAllForms();
  if (scieForm.style.display === "none" || scieForm.style.display === "") {
    scieForm.style.display = "block";
  } else {
    scieForm.style.display = "none";
  }
}

//===============================================METRIC==================================================//

//Calculations
const metricConvertBtn = document.getElementById("metricConvertBtn");
metricConvertBtn.addEventListener("click", function () {
  const metricInputNumber = parseFloat(document.getElementById("valueNumber").value);
  const selectMetricOption = document.getElementById("metricFromValues").value;
  const selectMetricOption2 = document.getElementById("metricToValues").value;
  const resultField = document.getElementById("metricResult");

  if (isNaN(metricInputNumber)) {
    resultField.value = "Enter a valid number";
    return;
  }

  let result;

  // Giga conversions
  if (selectMetricOption === "giga" && selectMetricOption2 === "mega") {
    result = metricInputNumber * 1000;
  } else if (selectMetricOption === "giga" && selectMetricOption2 === "kilo") {
    result = metricInputNumber * 1_000_000;
  } else if (selectMetricOption === "giga" && selectMetricOption2 === "base unit") {
    result = metricInputNumber * 1_000_000_000;
  } else if (selectMetricOption === "giga" && selectMetricOption2 === "milli") {
    result = metricInputNumber * 1e12;
  } else if (selectMetricOption === "giga" && selectMetricOption2 === "micro") {
    result = metricInputNumber * 1e15;
  }

  // Mega conversions
  else if (selectMetricOption === "mega" && selectMetricOption2 === "giga") {
    result = metricInputNumber * 0.001;
  } else if (selectMetricOption === "mega" && selectMetricOption2 === "kilo") {
    result = metricInputNumber * 1000;
  } else if (selectMetricOption === "mega" && selectMetricOption2 === "base unit") {
    result = metricInputNumber * 1_000_000;
  } else if (selectMetricOption === "mega" && selectMetricOption2 === "milli") {
    result = metricInputNumber * 1e9;
  } else if (selectMetricOption === "mega" && selectMetricOption2 === "micro") {
    result = metricInputNumber * 1e12;
  }

  // Kilo conversions
  else if (selectMetricOption === "kilo" && selectMetricOption2 === "giga") {
    result = metricInputNumber / 1e6;
  } else if (selectMetricOption === "kilo" && selectMetricOption2 === "mega") {
    result = metricInputNumber / 1000;
  } else if (selectMetricOption === "kilo" && selectMetricOption2 === "base unit") {
    result = metricInputNumber * 1000;
  } else if (selectMetricOption === "kilo" && selectMetricOption2 === "milli") {
    result = metricInputNumber * 1e6;
  } else if (selectMetricOption === "kilo" && selectMetricOption2 === "micro") {
    result = metricInputNumber * 1e9;
  }

  // Base unit conversions
  else if (selectMetricOption === "base unit" && selectMetricOption2 === "giga") {
    result = metricInputNumber / 1e9;
  } else if (selectMetricOption === "base unit" && selectMetricOption2 === "mega") {
    result = metricInputNumber / 1e6;
  } else if (selectMetricOption === "base unit" && selectMetricOption2 === "kilo") {
    result = metricInputNumber / 1000;
  } else if (selectMetricOption === "base unit" && selectMetricOption2 === "milli") {
    result = metricInputNumber * 1000;
  } else if (selectMetricOption === "base unit" && selectMetricOption2 === "micro") {
    result = metricInputNumber * 1e6;
  }

  // Milli conversions
  else if (selectMetricOption === "milli" && selectMetricOption2 === "giga") {
    result = metricInputNumber / 1e12;
  } else if (selectMetricOption === "milli" && selectMetricOption2 === "mega") {
    result = metricInputNumber / 1e9;
  } else if (selectMetricOption === "milli" && selectMetricOption2 === "kilo") {
    result = metricInputNumber / 1e6;
  } else if (selectMetricOption === "milli" && selectMetricOption2 === "base unit") {
    result = metricInputNumber / 1000;
  } else if (selectMetricOption === "milli" && selectMetricOption2 === "micro") {
    result = metricInputNumber * 1000;
  }

  // Micro conversions
  else if (selectMetricOption === "micro" && selectMetricOption2 === "giga") {
    result = metricInputNumber / 1e15;
  } else if (selectMetricOption === "micro" && selectMetricOption2 === "mega") {
    result = metricInputNumber / 1e12;
  } else if (selectMetricOption === "micro" && selectMetricOption2 === "kilo") {
    result = metricInputNumber / 1e9;
  } else if (selectMetricOption === "micro" && selectMetricOption2 === "base unit") {
    result = metricInputNumber / 1e6;
  } else if (selectMetricOption === "micro" && selectMetricOption2 === "milli") {
    result = metricInputNumber / 1000;
  }


  else if (selectMetricOption === selectMetricOption2) {
    result = metricInputNumber;
  }


  else {
    result = "Invalid conversion";
  }

  resultField.value = result;
});

  const metricform = document.getElementById("metricDiv");


function metricShow() {
    hideAllForms();

  if (metricform.style.display === "none" || metricform.style.display === "") {
    metricform.style.display = "block";
  } else {
    metricform.style.display = "none";
  }
}