x = prompt("Write your weight below [Numbers only]");
y = prompt("Write your height below [Numbers and dot (.) only, no commas allowed]");
z = Math.pow(y, 2);
bmi = x / z;
if (bmi < 18.5) {
	alert ("Your BMI is " +  Math.round(bmi) + ", underweight.");
}
if (bmi >= 18.5 && bmi <= 24.9) {
	alert ("Your BMI is " +  Math.round(bmi) + ", normal weight."); 
}
if (bmi > 24.9) { 
	alert ("Your BMI is " +  Math.round(bmi) + ", overweight.");
}

/*

Testing in another way 1

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    if (bmi < 18.5) {
        alert ("Your BMI is " +  Math.round(bmi) + ", underweight.");
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        alert ("Your BMI is " +  Math.round(bmi) + ", normal weight."); 
    }
    if (bmi > 24.9) { 
        alert ("Your BMI is " +  Math.round(bmi) + ", overweight.");
    }
}

var weight = prompt("Write your weight below [Numbers only]");
var height =  prompt("Write your height below [Numbers and dot (.) only, no commas allowed]");
var result = bmiCalculator(weight, height);


Testing in another way 2 

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi < 18.5) {
        console.log ("Your BMI is " +  Math.round(bmi) + ", underweight.");
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log ("Your BMI is " +  Math.round(bmi) + ", normal weight."); 
    }
    if (bmi > 24.9) { 
        console.log ("Your BMI is " +  Math.round(bmi) + ", overweight.");
    }
}

var weight = prompt("Write your weight below [Numbers only]");
var height =  prompt("Write your height below [Numbers and dot (.) only, no commas allowed]");
var result = bmiCalculator(weight, height);

*/

