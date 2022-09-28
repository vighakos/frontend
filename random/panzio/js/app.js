let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form'),
    erkez = form.erkez,
    tavoz = form.tavoz,
    szobak = Array.prototype.slice.call(document.getElementsByName('szobatipus')),
    furdok = Array.prototype.slice.call(document.getElementsByName('furdo')),
    ellatas = Array.prototype.slice.call(document.getElementsByName('ellatas')),
    vendegszam = form.vendegszam,
    v1 = form.v_1,
    v2 = form.v_2,
    v3 = form.v_3,
    v4 = form.v_4,
    egyeb = form.egyeb

foglalasok = [];

if (adatok = localStorage.getItem('foglalasok')) {
    foglalasok = JSON.parse(adatok)
}

felveszBtn.addEventListener('click', () => {
    if (erkez.value == "" || tavoz.value == "")
    {
        alert('A mezők kitöltése kötelező!')
    } else {
        let date1 = new Date(erkez.value)
        let date2 = new Date(tavoz.value)
        let diffTime = Math.abs(date2 - date1)
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        foglalas = {
            'id': foglalasok.length + 1,
            'erkezes': erkez.value,
            'tavozas': tavoz.value,
            'szobatipus': getValue(szobak),
            'vendegszam': vendegszam.value,
            'vendeg1_kor': parseInt(v1.value) != 0 ? v1.value : null,
            'vendeg2_kor': parseInt(v2.value) != 0 && vendegszam.value > 1 ? v2.value : null,
            'vendeg3_kor': parseInt(v3.value) != 0 && vendegszam.value > 2 ? v3.value : null,
            'vendeg4_kor': parseInt(v4.value) != 0 && vendegszam.value > 3 ? v4.value : null,
            'ellatas': getValue(ellatas),
            'furdo': furdoHozzafer(),
            'egyeb': egyeb.value,
            'ar': calcPrice(diffDays, getValue(szobak), vendegszam.value, getValue(ellatas), furdoHozzafer())
        }
        foglalasok.push(foglalas)
        localStorage.setItem('foglalasok', JSON.stringify(foglalasok))
        alert(`Foglalás felvéve`);
    }
})

function getValue(arr) {
    for(i = 0; i < arr.length; i++){
        if (arr[i].checked) return arr[i].value
    }
    return null
}

function furdoHozzafer() {
    if (form.teljes.checked) return "teljes"
    let valasz = ""
    for(i = 0; i < furdok.length; i++){
        if (furdok[i].checked) valasz += furdok[i].value + ";"
    }
    return valasz
}

function calcPrice(diffDays, szoba, vendegek, ellatas, furdo) {
    let szoba_ej = 0
    switch (szoba) {
        case 'egy_agy':
            szoba_ej = 9000
            break;
    
        case 'ket_agy':
            szoba_ej = 15000
            break;
    
        case 'ket_1pot':
            szoba_ej = 18000
            break;
    
        case 'ket_2pot':
            szoba_ej = 21000
            break;
    }
    console.log(szoba_ej);

    let ellatas_ej = 0
    switch (ellatas) {
        case 'reggeli':
            ellatas_ej = 900
            break;
    
        case 'fel':
            ellatas_ej = 2900
            break;
    
        case 'teljes':
            ellatas_ej = 4900
            break;
    }
    console.log(ellatas_ej);

    let furdo_ej = 0
    if (furdo == "teljes") {
        furdo_ej = 2000
    } else {
        let db = furdo.split(';').length
        furdo_ej = (db-1)*800
    }

    console.log(furdo_ej);

    console.log(szoba_ej + ellatas_ej + furdo_ej) * vendegek * diffDays

    return (szoba_ej + ellatas_ej + furdo_ej) * vendegek * diffDays
}