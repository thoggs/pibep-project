

const btnCad = document.getElementById("btncad")
const btnMail = document.getElementById("btnmail")
const altcssMail = document.getElementById("inner-form-mail")
const altcssCad = document.getElementById("inner-form-cad")
const mailForm = document.getElementById('inner-form-mail')
const cadForm = document.getElementById('inner-form-cad')
const divForm = document.getElementById('div-form')


btnMail.onclick = function (e) {
    e.preventDefault()

    cadForm.remove()

    if (altcssCad.classList.contains("hide-cad") && (altcssMail.classList.contains("hide-mail") )) {

        if (altcssMail.classList.contains("hide-mail")){
            altcssMail.classList.remove("hide-mail")
        } else{
            altcssMail.classList.add("hide-mail")}

    } else{
        if (altcssMail.classList.contains("hide-mail") ){
            altcssMail.classList.remove("hide-mail")
            altcssCad.classList.add("hide-cad")
        } else{
            altcssMail.classList.add("hide-mail")}
    }

    divForm.appendChild(cadForm)
}


btnCad.onclick = function (e) {
    e.preventDefault()

    mailForm.remove()

    if (altcssMail.classList.contains("hide-mail") && (altcssCad.classList.contains("hide-cad") )) {

        if (altcssCad.classList.contains("hide-cad")){
            altcssCad.classList.remove("hide-cad")
        } else{
            altcssCad.classList.add("hide-cad")}

    } else{

        if (altcssCad.classList.contains("hide-cad") ){
            altcssCad.classList.remove("hide-cad")
            altcssMail.classList.add("hide-mail")
        } else{
            altcssCad.classList.add("hide-cad")}
    }

    divForm.appendChild(mailForm)
}
