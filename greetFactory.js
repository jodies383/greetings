function theGreet() {

    if (localStorage['namesList']) {
        existingNames = JSON.parse(localStorage.getItem('namesList'));

    }

    var existingNames = []



    var namesGreeted = existingNames || []

    var regex = /^[a-zA-Z]+$/;

    function addNames(enterName, checkedRadioBtn) {

        if (!namesGreeted.includes(enterName.toUpperCase()) && regex.test(enterName.toUpperCase()) && checkedRadioBtn) {
            namesGreeted.push(enterName.toUpperCase())
        }
        localStorage.setItem('namesList', JSON.stringify(namesGreeted));

    }
    function returnNames() {
        return namesGreeted;
    }

    function theCount() {
        return namesGreeted.length;
    }
    function greetMe(enterName, checkedRadioBtn) {


        if (regex.test(enterName) && checkedRadioBtn === "English") {

            return ("Hello, " + enterName);
        }
        else if (regex.test(enterName) && checkedRadioBtn === "Afrikaans") {

            return ("Goeie More, " + enterName);
        }
        else if (regex.test(enterName) && checkedRadioBtn === "isiXhosa") {

            return ("Molo, " + enterName);


        } else return ("")
    }

    function removeValidName(param1) {

        if (param1 && regex.test(param1)) {
            return ("");

        }

        else {
            return ("Please enter a name");
        }
    }
    function noName(param1, checkedRadioBtn) {

        if ((!param1 && !checkedRadioBtn)) {

            return ("Please enter your name and select a language");

        } else return ("")
    }

    function warnLang(param1, checkedRadioBtn) {
        if (regex.test(param1) && !checkedRadioBtn) {
            return ("Please select a language");
        } else return ("")

    }

    return {
        addNames,
        theCount,
        returnNames,
        greetMe,
        removeValidName,
        noName,
        warnLang,



    }


}