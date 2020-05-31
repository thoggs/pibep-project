

var btnCad = document.getElementById("btn-cad")
var btnMail = document.getElementById("btn-mail")
var altcssMail = document.getElementById("inner-form-mail")
var altcssCad = document.getElementById("inner-form-cad")


btnMail.onclick = function (e) {
    e.preventDefault()
    
    if (altcssCad.classList.contains("hide-cad") & (altcssMail.classList.contains("hide-mail") )) {

        if (altcssMail.classList.contains("hide-mail")){
            altcssMail.classList.remove("hide-mail")
        } else{
            altcssMail.classList.add("hide-mail")}

    } else{
        
        if (altcssMail.classList.contains("hide-mail") ){
            altcssMail.classList.remove("hide-mail")
            altcssCad.classList.add("hide-cad")
        } else{
            altcssMail.classList.add("hide-mail")
        }
    }
}


btnCad.onclick = function (e) {
    e.preventDefault()

    if (altcssMail.classList.contains("hide-mail") & (altcssCad.classList.contains("hide-cad") )) {

        if (altcssCad.classList.contains("hide-cad")){
            altcssCad.classList.remove("hide-cad")
        } else{
            altcssCad.classList.add("hide-cad")}

    } else{

        if (altcssCad.classList.contains("hide-cad") ){
            altcssCad.classList.remove("hide-cad")
            altcssMail.classList.add("hide-mail")
        } else{
            altcssCad.classList.add("hide-cad")
        }
    }
    
}
