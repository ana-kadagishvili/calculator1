const input_1= document.getElementById('input_1');
const input_2 =  document.getElementById('input_2');
const operation =  document.getElementById('operation');
const clearButton =  document.getElementById('clearButton');
const calculateButton= document.getElementById('calculateButton');

const resultDiv = document.getElementById("result");

clearButton.onclick = clerarInputs;

function clerarInputs() {
 input_1.value = null;
 input_2.value = null;
 resultDiv.textContent = null;
}
calculateButton.onclick = calculate;

function calculate() {
    let result = null;
switch(operation.value) {
     case "+":
         result = parseInt(input_1.value) + parseInt(input_2.value);
        break;
     case "-":
        result = parseInt(input_1.value) - parseInt(input_2.value);
         break;
     case "/":
       const tmpnumber = parseInt(input_1.value) / parseInt(input_2.value);
       result = tmpnumber.toFixed(3);
       break;
     case "*":
        result = parseInt(input_1.value) * parseInt(input_2.value);
         break;
     case "%":
        result = parseInt(input_1.value) % parseInt(input_2.value);
         break;
        //  console.log("parseInt(input_1.value) % parseInt(input_2.value)");
    default:
        result = "unknown operation";

         console.log("unknown operation");
                console.log("operation");
}
  resultDiv.textContent = result;
}
