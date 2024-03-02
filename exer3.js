//Exercise 3 - JS Part 1

const password1 = "blank";
const password2 = "blank";
const username = "blank";



function validatePassword(password1, password2) {
    var hasUpper = false; //initial boolean values
    var hasLower = false;
    var hasNumber = false;

    if (password1 === password2) { //if both passwords are the same

        if (password1.length >= 8) { //if both passwords are at least 8 characters

            for (let i = 0; i < password1.length; i++) { //checks if it has number
                if (password1[i] == password1[i].toUpperCase()  && password1[i] == password1[i].toLowerCase()) { //if the character in the string doesn't change after applying lower and upper case methods it is a number
                    hasNumber = true;
                    break;
                } 
            }

            for (let i=0; i<password1.length; i++) {
                if(password1[i] == password1[i].toUpperCase()) {
                    hasUpper = true;
                    break;
                }
            }

            for (let i=0; i<password1.length; i++) {
                if(password1[i] == password1[i].toLowerCase()) {
                    hasUpper = true;
                    break;
                }
            }

            
            

        }

    }

}

function reversePassword(password) {
    
}