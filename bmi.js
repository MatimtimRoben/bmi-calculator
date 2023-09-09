function calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // BMI formula = kg / (m * m)
    let height2 = height / 100;
    let bmi = weight / (height2 * height2);
    let result = ("Your BMI is: " + bmi);

    let popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerText = result;
}