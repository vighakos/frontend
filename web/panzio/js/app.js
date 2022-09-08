let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    erkez = form.erkez,
    tavoz = form.tavoz,
    szob = document.getElementsByName('szobatipus'),
    szobak = Array.prototype.slice.call(document.getElementsByName('szobatipus')),
    ellatas = Array.prototype.slice.call(document.getElementsByName('ellatas')),
    vendegszam = form.vendegszam,

foglalasok = [];

if (adatok = localStorage.getItem('gepjarmuvek')) {
    gepjarmuvek = JSON.parse(adatok)
}

felveszBtn.addEventListener('click', () => {
    if (erkez.value == "" || tavoz.value == "")
    {
        alert('A mezők kitöltése kötelező!')
    } else {
        let szobatipus = getValue(szobak),
            ellatas_ = getValue(ellatas)
        foglalas = {
            'id': foglalasok.length + 1,
            'erkezes': erkez.value,
            'tavozas': tavoz.value,
            'szobatipus': szobatipus,
            'ellatas': ellatas_
        }
    }

})

function getValue(arr) {
    arr.forEach(item => {
        if (item.checked) return item.value
    });
    return null
}

