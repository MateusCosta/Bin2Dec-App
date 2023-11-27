const screen = document.getElementById("screen");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
var result = false;
const fontSizes = [105, 90, 75, 50, 35, 20];
var currentFontSize = 0;

function convertBin2Dec(e) {
  const numbers = screen.innerHTML.split("").reverse();
  var total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += Math.pow(parseInt(numbers[i], 10) * 2, i);
  }
  changeScreen(total);
  result = true;
}

function checkScreenSize() {
  if (screen.innerHTML.length > 6) {
    currentFontSize =
      currentFontSize < fontSizes.length
        ? currentFontSize + 1
        : currentFontSize;
  } else {
    currentFontSize = 0;
  }

  screen.style.fontSize = `${fontSizes[currentFontSize]}px`;
}

function changeScreen(value) {
  screen.innerHTML = value;
  checkScreenSize();
}

function clearScreen(e) {
  changeScreen("");
}

function addNumber(e) {
  if (result) {
    result = false;
    clearScreen();
  }
  const output = screen.innerHTML + e.target.value;
  changeScreen(output);
}

clear.addEventListener("click", clearScreen);
one.addEventListener("click", addNumber);
zero.addEventListener("click", addNumber);
equals.addEventListener("click", convertBin2Dec);
