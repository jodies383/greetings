var greetBtn = document.querySelector(".greet");

var ansGreet = document.querySelector(".myGreet");

var enterName = document.querySelector(".greetMe");

var theCount = document.querySelector(".myCount");

var resetBtn = document.querySelector(".Reset");

var warnName = document.querySelector(".warningName")

var warningLang = document.querySelector(".warningLang")

var greetCounter = 1;

greetBtn.addEventListener('click', greetMe);
greetBtn.addEventListener('click', updateCounter);
greetBtn.addEventListener('click', noName)

resetBtn.addEventListener('click', function () {
  localStorage.removeItem('counted');
});

greetBtn.addEventListener('click', function () {
  greetCounter++;

  localStorage['counted'] = greetCounter;
});


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
function noName(param1) {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked");
  var param1 = enterName.value
  if (param1 === "") {
    return warnName.innerHTML = ("Please enter your name");
  } if (!checkedRadioBtn){
    return warningLang.innerHTML = ("Please select a language");
  } if (param1 === "" && !checkedRadioBtn){
    return warningLang.innerHTML = ("Please enter your name and select a language")
  }
}
function updateCounter() {

  return theCount.innerHTML = greetCounter;

}
