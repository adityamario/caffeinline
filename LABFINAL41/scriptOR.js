
function emailCheck(emailInput){
    var firstcheck = emailInput.indexOf("@")
    if(firstcheck < 1) return false;

    var secondcheck = emailInput.indexOf(".")
    if(secondcheck < firstcheck+3) return false

    var thirdcheck = emailInput.length -1;
    if(thirdcheck === secondcheck) return false

    return true
}

function validation(ev){
    var form = document.forms["orderForm"]
    var errorName = document.getElementById('name-error')
    var errorEmail = document.getElementById('email-error')
    var errorCvv = document.getElementById('error-cvv')
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
    if(form['cvv'].value =="" || form['cvv'].value.length != 3){
        errorCvv.innerText = "*invalid"
        check = false
    }
    if(form['city'].value == 1){
        document.getElementById('city-error').innerText = "*select one"
        check = false
    }
    if(form['add'].value == ""){
        document.getElementById("add-error").innerText = "*Required"
        check = false
    }
    if(form['pay'].value == "none"){
        document.getElementById('pay-error').innerText = "*select one"
        check = false
    }
    if(form['tc'].value == 0 || form['tc'].value == 2){
        document.getElementById('tc-error').innerText = "*must agree"
        check = false
    }


    if(check == false){
        ev.preventDefault()
    }
    else{
        alert('Ordered')
    }
}