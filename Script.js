let input = document.getElementById("InputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      console.log(eval(string));
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      console.log(string)
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});


document.addEventListener("keydown", (e) => {
    const regex=/[0-9\+\-\*\/]/
  if (e.key == "Enter") {
    console.log(eval(string));
    string = eval(string);
    input.value = string;
  } else if (e.key == "AC") {
    string = "";
    input.value = string;
  } else if (e.key == "Backspace") {
    console.log(string)
    string = string.substring(0, string.length - 1);
    input.value = string;
  } else if(regex.test(e.key)){
    string += e.key;
    input.value = string;
  }
});
