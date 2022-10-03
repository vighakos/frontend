let hegyek = []

async function getFile() {
    return await fetch('hegyekMo.txt')
        .then(res => res.text())
        .then(res => res.split('\n'))
}

async function load() {
    let adatok = await getFile()

    adatok.forEach(adat => {
        let sor = adat.split(';')

        let object = {
            "nev": sor[0],
            "hegyseg": sor[1],
            "magassag": sor[2]
        }

        hegyek.push(new Hegy(object))
    })

    let table = document.querySelector('#mytable')

    hegyek.forEach(hegy => {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = hegy.nev
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerText = hegy.hegyseg
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerText = hegy.magassag
        tr.appendChild(td3)

        table.appendChild(tr)
    })
}

load()