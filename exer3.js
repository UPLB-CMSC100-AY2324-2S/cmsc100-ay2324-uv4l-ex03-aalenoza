//Exercise 3 - JS Part 1

const password1 = "blank";
const password2 = "blank";
const username = "blank";



function validatePassword(password1, password2) {
    var samePassword = false; //initial boolean values
    var atleast8Characters = false;
    var hasUpper = false; 
    var hasLower = false;
    var hasNumber = false;

    if (password1 === password2) { //if both passwords are the same
        samePassword = true;
        if (password1.length >= 8) { //if both passwords are at least 8 characters
            atleast8Characters = true;

            for (var i = 0; i < password1.length; i++) { //checks if it has number
                if (password1[i] == password1[i].toUpperCase()  && password1[i] == password1[i].toLowerCase()) { //if the character in the string doesn't change after applying lower and upper case methods it is a number
                    hasNumber = true;
                    break;
                } 
            }

            for (var i=0; i<password1.length; i++) { //checks if it has an upper case character
                if(password1[i] == password1[i].toUpperCase() && isNaN(password1[i])) {
                    hasUpper = true;
                    break;
                }
            }

            for (var i=0; i<password1.length; i++) { //checks if it has a lower case character
                if(password1[i] == password1[i].toLowerCase() && isNaN(password1[i])) {
                    hasLower = true;
                    break;
                }
            }

        }

    }

    if (samePassword && atleast8Characters && hasLower && hasNumber && hasUpper) { //if all checks are true
        return true;
    } else {
        return false;
    }

}

function reversePassword(password) { //function for reversing a string
    reversed = ""
    for (let i = password.length-1; i >= 0; i--) { //reverse loop, that concatenates into a blank string
        reversed += password[i];
    }

    return reversed;
}


function storePassword(name, password1, password2) { //store password
    if (validatePassword(password1, password2)) {
        account = {
            name: name,
            actual_password: password1,
            new_password: reversePassword(password1)
        }
        return account;
    } else if (password1 != password2) {
        account = "Wrong Password";
        return account;
    } else {
        account = "Invalid Password";
        return account;
    }
}

console.log(storePassword("aaron","Password1","Password1"))

