function calculateCalories() {
    var food = document.getElementById('foodInput').value;
    var grams = document.getElementById('gramInput').value;
    var unit = document.getElementById('unitSelect').value;

    // Example calculation: just assuming 50 calories per gram (simplify as needed)
    var calories = grams * 50; // You will replace this with actual data logic later

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Calories for ' + grams + ' ' + unit + ' of ' + food + ' is approximately ' + calories + ' calories.';
    resultDiv.style.display = 'block';
}
