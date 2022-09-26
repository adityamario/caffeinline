
function emailCheck(emailInput){
    var firstcheck = emailInput.indexOf("@")
    if(firstcheck < 1) return false;

    var secondcheck = emailInput.indexOf(".")
    if(secondcheck < firstcheck+3) return false

    var thirdcheck = emailInput.length -1;
    if(thirdcheck === secondcheck) return false

    return true
}

function validate(ev){
    var form = document.forms["csForm"]
    var errorName = document.getElementById('name-error')
    var errorEmail = document.getElementById('email-error')
    var check = true
    var flag = true
    if(form['name'].value == ""){
        check = false
        errorName.innerText = "*Required"
    }
    if(form['email'].value == "" || emailCheck(form['email'].value)==false){
        check = false
        errorEmail.innerText = "*Required"
    }
    if(form['message'].value == ""){
        document.getElementById("message-error").innerText = "*Required"
        check = false
    }


    if(check == false){
        ev.preventDefault()
    }
    else{
        alert('SENT')
    }
}