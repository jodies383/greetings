var greetBtn = document.querySelector(".greet");

var ansGreet = document.querySelector(".myGreet");

var enterName = document.querySelector(".greetMe");

var theCount = document.querySelector(".myCount");

var resetBtn = document.querySelector(".Reset");

var warnName = document.querySelector(".warningName")

var warningLang = document.querySelector(".warningLang")

var warnBoth = document.querySelector(".warningBoth")

// var greetCounter = 0;

greetBtn.addEventListener('click', greetMe);
greetBtn.addEventListener('click', updateCounter);
greetBtn.addEventListener('click', noName);
greetBtn.addEventListener('click', addNames);

resetBtn.addEventListener('click', function () {
  localStorage.removeItem('counted'),
    localStorage.removeItem('namesList');
});


var existingNames = []

if(localStorage['namesList']){
   existingNames = JSON.parse(localStorage.getItem('namesList'));

}

var namesGreeted = existingNames || []


function addNames() {


    if(!namesGreeted.includes(enterName.value)){
      namesGreeted.push(enterName.value)

    }

      localStorage.setItem('namesList', JSON.stringify(namesGreeted));

      theCount.innerHTML = namesGreeted.length;
    }

greetBtn.addEventListener('click', function () {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked");
  var param1 = enterName.value

  if (param1 === enterName.value && checkedRadioBtn) {
    
  }
  
});


if (localStorage['counted']) {

  greetCounter = Number(localStorage['counted']);
}
function greetMe(param1) {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked").value;
  var param1 = enterName.value

  if (checkedRadioBtn === "English") {
    warningLang.innerHTML = ("")
    ansGreet.innerHTML = ("Hello, " + param1);
  }
  else if (checkedRadioBtn === "Afrikaans") {
    warningLang.innerHTML = ("")
    ansGreet.innerHTML = ("Goeie More, " + param1);
  }
  else if (checkedRadioBtn === "isiXhosa") {
    warningLang.innerHTML = ("")
    ansGreet.innerHTML = ("Molo, " + param1);
  }

}
function noName(param1) {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked");
  var param1 = enterName.value
  if ((param1 === "" && !checkedRadioBtn)) {
    warningLang.innerHTML = ("")
    warnBoth.innerHTML = ("Please enter your name and select a language")
  } else {
    warnBoth.innerHTML = ("")
  }
  if (param1 === "" && checkedRadioBtn) {
    ansGreet.innerHTML = ("")
    warnName.innerHTML = ("Please enter your name");
  } else if (!checkedRadioBtn && param1) {
    warningLang.innerHTML = ("Please select a language");
  } else if (param1 === enterName.value) {
    warnName.innerHTML = ("")

  }

}
function updateCounter() {

  return theCount.innerHTML = namesGreeted.length;

}

theCount.innerHTML = namesGreeted.length;



