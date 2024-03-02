
function isUpperCase(password1) {
    for (var i=0; i<password1.length; i++) {
        if(password1[i] == password1[i].toUpperCase() && isNaN(password1[i])) {
            console.log(password1[i])
            console.log("has upper")
            hasUpper = true;
            break;
        }
    }
    
}

isUpperCase("hello5")