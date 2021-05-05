var greetBtn = document.querySelector(".greet");

var ansGreet = document.querySelector(".myGreet");

var enterName = document.querySelector(".greetMe");

var theCount = document.querySelector(".myCount");

var resetBtn = document.querySelector(".Reset");

var greetCounter = 0;

greetBtn.addEventListener('click', greetMe);
greetBtn.addEventListener('click', updateCounter);

resetBtn.addEventListener('click', function () {
  localStorage.removeItem('counted');
});

greetBtn.addEventListener('click', function () {
  greetCounter++;

  localStorage['counted'] = greetCounter;
});
var greetCounter = 0;

if (localStorage['counted']) {

  greetCounter = Number(localStorage['counted']);
}
function greetMe(param1) {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked").value;
  var param1 = enterName.value
  if (checkedRadioBtn === "English") {
    ansGreet.innerHTML = ("Hello, " + param1);
  }
  else if (checkedRadioBtn === "Afrikaans") {
    ansGreet.innerHTML = ("Goeie More, " + param1);
  }
  else if (checkedRadioBtn === "isiXhosa") {
    ansGreet.innerHTML = ("Molo, " + param1);
  }


  return ansGreet;
}
function updateCounter() {

  return theCount.innerHTML = greetCounter;

}
