var greetBtn = document.querySelector(".greet");

var ansGreet = document.querySelector(".myGreet");

var enterName = document.querySelector(".greetMe");

var theCounter = document.querySelector(".myCount");

var resetBtn = document.querySelector(".Reset");

var warnName = document.querySelector(".warningName")

var warningLang = document.querySelector(".warningLang")

var warnBoth = document.querySelector(".warningBoth")

var validName = document.querySelector(".validName")



greetBtn.addEventListener('click', greeting);
greetBtn.addEventListener('click', addWarnings);
greetBtn.addEventListener('click', storeNames);


var existingNames;

if (localStorage['namesList']) {
  existingNames = JSON.parse(localStorage.getItem('namesList'));

}

let greetRef = theGreet(existingNames);



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

  setTimeout(function(){   warnBoth.innerHTML = "";
  }, 2000);

  setTimeout(function(){   warningLang.innerHTML = "";
  }, 2000);

  setTimeout(function(){   validName.innerHTML = "";
  }, 2000);

  warnBoth.innerHTML = greetRef.noName(enterName.value, uncheckedRadioBtn)

  warningLang.innerHTML = greetRef.warnLang(enterName.value, uncheckedRadioBtn)
  


}
resetBtn.addEventListener('click', function () {
  localStorage.removeItem('counted'),
    localStorage.removeItem('namesList');
});
theCounter.innerHTML = greetRef.theCount();