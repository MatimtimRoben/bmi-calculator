function calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // BMI formula = kg / (m * m)
    let height2 = height / 100;
    let bmi = Math.floor(weight / (height2 * height2));
    document.getElementById("result").textContent = bmi;
    // conditions
    if(bmi < 18.5) {
        document.getElementById("popUp").textContent = "You are Underweight";
    } else if(bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("popUp").textContent = "You are Healthy";
    } else if(bmi >= 25 && bmi < 29.9) {
        document.getElementById("popUp").textContent = "You are Overweight";
    } else {
        document.getElementById("popUp").textContent = "You are Obese";
    }
}