function theGreet() {


    function theCount() {
        return namesGreeted.length;
    }
    function greetMe(enterName, checkedRadioBtn) {

        if (regex.test(enterName)) {
            if (checkedRadioBtn === "English" ) {

                return ("Hello, " + enterName);
            }
            else if (checkedRadioBtn === "Afrikaans") {

                return ("Goeie More, " + enterName);
            }
            else if (checkedRadioBtn === "isiXhosa") {

                return ("Molo, " + enterName);
            }

        } else return ("")
    }

    function removeValidName(param1) {
        if (regex.test(param1)) {
            if (param1) {
                return ("");

            }
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
        if (param1 && !checkedRadioBtn) {
            return ("Please select a language");
        } else return ("")

    }

    return {

        theCount,
        greetMe,
        removeValidName,
        noName,
        warnLang,



    }


}
