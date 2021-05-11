function greet() {

    var existingNames = []
    var namesGreeted = existingNames || []

    var regex = /^[a-zA-Z]+$/;

    function getNames() {
        if (localStorage['namesList']) {
            existingNames = JSON.parse(localStorage.getItem('namesList'));
        }
    }

    function pushNames(enterName, checkedRadioBtn) {

        if (!namesGreeted.includes(enterName.value) && regex.test(enterName.value) && checkedRadioBtn) {
            namesGreeted.push(enterName.value)

        }

        localStorage.setItem('namesList', JSON.stringify(namesGreeted));
    }
    function theCount() {
        return namesGreeted.length;
    }
    function greetMe(enterName, checkedRadioBtn) {

        if (regex.test(enterName.value)) {
            if (checkedRadioBtn === "English") {

                return ("Hello, " + param1);
            }
            else if (checkedRadioBtn === "Afrikaans") {

                return ("Goeie More, " + param1);
            }
            else if (checkedRadioBtn === "isiXhosa") {

                return ("Molo, " + param1);
            }

        }
    }
    function removeValidName(param1, checkedRadioBtn) {
        if (regex.test(param1)) {
            if (checkedRadioBtn === "English") {
                return ("");
            }
            else if (checkedRadioBtn === "Afrikaans") {
                return ("");
            }
            else if (checkedRadioBtn === "isiXhosa") {
                return ("");
            }
        }
        else {
            return ("Please enter a name");
        }
    }
    function noName(param1, checkedRadioBtn) {

        if ((param1 === "" && !checkedRadioBtn)) {

            return ("Please enter your name and select a language")

        }
    }
    function removeWarnLang(param1, checkedRadioBtn) {
        if (param1 === "" && checkedRadioBtn) {
            return ("")
        }
    }
    function removeBothWarnings(param1, checkedRadioBtn) {
        if (param1 === "" && checkedRadioBtn) {
            return ("")
        }
    }
    function warnLang(param1, checkedRadioBtn) {
        if (!checkedRadioBtn && param1) {
            return ("Please select a language");
        }
    }
    function removeWarnName(param1) {
    } if (param1 === enterName.value) {
        return ("")
    }
    // function updateCounter() {

    //     return theCount.innerHTML = namesGreeted.length;

    // }

    return{
        getNames,
        pushNames,
        theCount,
        greetMe,
        removeValidName,
        noName,
        removeWarnLang,
        removeBothWarnings,
        warnLang,
        removeWarnName


    }


}
