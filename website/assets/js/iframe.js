

const btnHeader = document.getElementById('btnHeader')
const arrowElement = document.getElementById('upArrow"')
const btnCancel = document.getElementById('btnCancel')


btnHeader.onclick = function (e) {
    e.preventDefault()

    arrowElement.style.setProperty('opacity', '1')
    arrowElement.style.setProperty('visibility', 'visible')
    btnHeader.style.setProperty('display', 'none')
}

btnCancel.onclick = function (e) {
    e.preventDefault()

    arrowElement.style.setProperty('opacity', '0')
    arrowElement.style.setProperty('visibility', 'hidden')
    btnHeader.style.setProperty('display', 'flex')
}
