const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        if (display.value.includes("0")) {
            display.value = eval(display.value) + 1;
        } else if (display.value.includes("+")) {
            display.value = eval(display.value) - 1;
        } else if (display.value.includes("-")) {
            display.value = eval(display.value) + 1;
        } else if (display.value.includes("*")) {
            display.value = eval(display.value) / 1.1;
        } else if (display.value.includes("/")) {
            display.value = eval(display.value) * 1.1;
        } else {
            // Hvis ingen af de ovenstående betingelser gælder, evalueres regnestykket normalt
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}
