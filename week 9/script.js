function calculate() {
    var a = document.getElementById("a_value").value;
    // var b = document.getElementById("b_value").value;
    /*
    if (a % 2 == 0) {
        result = "Even"
    } else {
        result = "Odd"
    }
    */
    var result = 1;
    var output = "Result: ";
    for (var i = 1; i <= a; i++) {
        result *= i;
    }
    document.getElementById("result").innerHTML = "Result: " + result;
}