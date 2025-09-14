
function userInput() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var result = [];
    var floatH = parseFloat(h);
    var floatW = parseFloat(w);

    result.push(floatH);
    result.push(floatW);
    return result;
}

function trueResult() {
    var result = userInput();
    var height = result[0];
    var weight = result[1];

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "⚠ Please enter valid numbers!";
        return;
    }

    
    height = height / 100;

    var BodyMassIndex = weight / (height ** 2);
    BodyMassIndex = Math.round(BodyMassIndex * 100) / 100;

    document.getElementById('result').innerHTML = `Your BMI is: ${BodyMassIndex}`;
    showResult(BodyMassIndex);

    
    var indicator = document.getElementById("bmi-indicator");
    let pos = 0;

    if (BodyMassIndex <= 18.5) {
        pos = (BodyMassIndex / 18.5) * 25; 
    } else if (BodyMassIndex <= 24.9) {
        pos = 25 + ((BodyMassIndex - 18.5) / (24.9 - 18.5)) * 25;
    } else if (BodyMassIndex <= 29.9) {
        pos = 50 + ((BodyMassIndex - 25) / (29.9 - 25)) * 25;
    } else {
        pos = 75 + Math.min(((BodyMassIndex - 30) / 10) * 25, 25); 
    }

    indicator.style.left = pos + "%";
}


function showResult(BMI) {
    var showWeightEle = document.getElementById('weightresult');
    if (BMI <= 18.5) {
        showWeightEle.innerHTML = 'Weight Type: Underweight';
    } else if (BMI > 18.5 && BMI <= 24.9) {
        showWeightEle.innerHTML = 'Weight Type: Normal';
    } else if (BMI > 25 && BMI <= 29.9) {
        showWeightEle.innerHTML = 'Weight Type: Overweight';
    } else if (BMI > 30) {
        showWeightEle.innerHTML = 'Weight Type: Obese';
    } else {
        console.log('There is an Error!');
    }
}

