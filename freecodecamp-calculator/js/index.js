let display = document.getElementById("display");
let AC = document.querySelector(".AC");
let C = document.querySelector(".C");
let numbers = document.querySelectorAll(".seven, .eight, .nine, .four, .five, .six, .one, .two, .three");
let zero = document.querySelector(".zero");
let operators = document.querySelectorAll(".plus, .minus, .divide, .multiply, .decimal");
let equal = document.querySelector(".equal");
//off calculator
AC.addEventListener("click", function(){
  display.innerHTML = "";
});
//on and delete everything
C.addEventListener("click", function(){
  display.innerHTML = 0;
});

//numbers from 1 to 9
for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(){
    if(parseInt(display.innerHTML) === 0) {
      display.innerHTML = "";
      display.innerHTML += parseInt(numbers[i].innerHTML);
    }
    else if(display.innerHTML.length <= 30) {
      display.innerHTML += parseInt(numbers[i].innerHTML);
    }
    console.log(display.innerHTML);
  });
}

//zero
zero.addEventListener("click", function(){
  if(parseInt(display.innerHTML) !== 0 && display.innerHTML.length <= 30) {
    display.innerHTML += 0;
  }
  console.log(parseInt(display.innerHTML));
});

// operators
for(let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", function(){
    if(parseInt(display.innerHTML) !== 0 && display.innerHTML[display.innerHTML.length - 1] !== operators[0].innerHTML && display.innerHTML[display.innerHTML.length - 1] !== operators[1].innerHTML && display.innerHTML[display.innerHTML.length - 1] !== operators[2].innerHTML && display.innerHTML[display.innerHTML.length - 1] !== operators[3].innerHTML && display.innerHTML[display.innerHTML.length - 1] !== operators[4].innerHTML) {
      display.innerHTML += operators[j].innerHTML;
    }
    console.log(operators[j].innerHTML);
  });
}

function calculation(result) {
  var calc = parseFloat(result);
  return calc;
}
//calculation
equal.addEventListener("click", function(){
  console.log(display.innerHTML);
  let result = display.innerHTML;
  // display.innerHTML = 0;
  console.log(eval(result));
  if(eval(result) !== parseInt(eval(result))) {
    display.innerHTML = eval(result).toFixed(2);
  } else {
    display.innerHTML = eval(result);
  }
});