const upscreen = document.querySelector(".screen-up");
const downscreen = document.querySelector(".screen-down");
const ac = document.querySelector(".ac");
const abs = document.querySelector(".abs");
const modul = document.querySelector(".modulus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const minus = document.querySelector(".minus");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const plus = document.querySelector(".plus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const equal = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");

ac.addEventListener("click", () => {
  upscreen.innerHTML = "";
  downscreen.innerHTML = "";
});


abs.addEventListener("click",() => {
     if (downscreen.innerText > 0 || downscreen.innerText < 0) {
       downscreen.innerText *= -1;
       upscreen.innerText = downscreen.innerText;
     } else {
       downscreen.innerText = upscreen.innerText *= -1;
       upscreen.innerText = " ";
       upscreen.innerText = downscreen.innerText;
     }
});

modul.addEventListener("click",() => {
   if (downscreen.innerText > 0 || downscreen.innerText < 0) {
     downscreen.innerText /= 100;
     upscreen.innerText = downscreen.innerText;
   } else {
     downscreen.innerText = upscreen.innerText / 100;
     upscreen.innerText = downscreen.innerText;
   }
});

seven.addEventListener("click", () => {
  upscreen.innerHTML += "7";
});

eight.addEventListener("click", () => {
  upscreen.innerHTML += "8";
});

nine.addEventListener("click", () => {
  upscreen.innerHTML += "9";
});

four.addEventListener("click", () => {
  upscreen.innerHTML += "4";
});

five.addEventListener("click", () => {
  upscreen.innerHTML += "5";
});

six.addEventListener("click", () => {
  upscreen.innerHTML += "6";
});

one.addEventListener("click", () => {
  upscreen.innerHTML += "1";
});

two.addEventListener("click", () => {
  upscreen.innerHTML += "2";
});

three.addEventListener("click", () => {
  upscreen.innerHTML += "3";
});

zero.addEventListener("click", () => {
  upscreen.innerHTML += "0";
});

dot.addEventListener("click", () => {
  upscreen.innerHTML += ".";
});

minus.addEventListener("click", () => {
  upscreen.innerHTML += "-";
});

plus.addEventListener("click", () => {
  upscreen.innerHTML += "+";
});

multiply.addEventListener("click", () => {
  upscreen.innerHTML += "*";
});

divide.addEventListener("click", () => {
  upscreen.innerHTML += "/";
});

equal.addEventListener("click", () => {
  let final = eval(upscreen.innerText);
  downscreen.innerText = final.toFixed(2);
  upscreen.innerText = downscreen.innerText;
});
