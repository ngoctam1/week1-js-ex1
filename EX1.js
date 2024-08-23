// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

var massMark = 78;
var heightMark = 1.75; 

var massJohn = 85;
var heightJohn = 1.8; 

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);


var markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:", BMIMark);
console.log("BMI John:", BMIJohn);
console.log("Mark có BMI cao hơn John không?", markHigherBMI);
