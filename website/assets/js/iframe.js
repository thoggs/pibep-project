

const btnHeader = document.getElementById('btnHeader')
const el = document.getElementById('upArrow"')
const btnCancel = document.getElementById('btnCancel')



btnHeader.onclick = function (e) {
    e.preventDefault()

    el.style.setProperty('opacity', '1')
    el.style.setProperty('visibility', 'visible')
    btnHeader.style.setProperty('display', 'none')
}

btnCancel.onclick = function (e) {
    e.preventDefault()

    el.style.setProperty('opacity', '0')
    el.style.setProperty('visibility', 'hidden')
    btnHeader.style.setProperty('display', 'flex')
}
