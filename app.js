// variables
let num01 = 0;
let num02 = 0;
let result = 0;
// sum
function sum(){
num01 = Number(document.getElementById("first-num").value)
num02 = Number(document.getElementById("second-num").value)
result = num01+num02;
document.getElementById("result").innerHTML=result
}