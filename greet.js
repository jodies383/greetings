var greetBtn = document.querySelector(".greet");

var ansGreet = document.querySelector(".myGreet");

var enterName = document.querySelector(".greetMe");

var theCounter = document.querySelector(".myCount");

var resetBtn = document.querySelector(".Reset");

var warnName = document.querySelector(".warningName")

var warningLang = document.querySelector(".warningLang")

var warnBoth = document.querySelector(".warningBoth")

var validName = document.querySelector(".validName")


let greetRef = theGreet();

greetBtn.addEventListener('click', greeting);
greetBtn.addEventListener('click', addWarnings);
greetBtn.addEventListener('click', storeNames);



function storeNames() {
  var checkedRadioBtn = document.querySelector("input[name='languages']:checked")


 
  greetRef.addNames(enterName.value, checkedRadioBtn)
 
  theCounter.innerHTML = greetRef.theCount();
  checkedRadioBtn.checked = false
  enterName.value = ""
}

function greeting() {

  var checkedRadioBtn = document.querySelector("input[name='languages']:checked");
  ansGreet.innerHTML = ""
  if (checkedRadioBtn) {


    greetRef.greetMe(enterName.value, checkedRadioBtn.value);
    ansGreet.innerHTML = greetRef.greetMe(enterName.value, checkedRadioBtn.value);


    validName.innerHTML = greetRef.removeValidName(enterName.value)
  }
}
function addWarnings() {
  var uncheckedRadioBtn = document.querySelector("input[name='languages']:checked");


  warnBoth.innerHTML = greetRef.noName(enterName.value, uncheckedRadioBtn);
  if (warningLang.innerHTML = greetRef.warnLang(enterName.value, uncheckedRadioBtn)) {
    validName.innerHTML = ""
  }


}
resetBtn.addEventListener('click', function () {
  localStorage.removeItem('counted'),
    localStorage.removeItem('namesList');
});
theCounter.innerHTML = greetRef.theCount();