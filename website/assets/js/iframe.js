

const btnHeader = document.getElementById('btnLoginHeader')
const arrowElement = document.getElementById('upArrow')
const btnCancel = document.getElementById('btnCancel')

function btnDisplay() {
    btnHeader.style.display = 'inline-block'
}

btnHeader.onclick = function (e) {
    e.preventDefault()

    btnHeader.style.display = 'none'
    arrowElement.classList.remove('hide')
}

btnCancel.onclick = function (e) {
    e.preventDefault()

    arrowElement.classList.add('hide')
    setTimeout(btnDisplay, 410)
}
