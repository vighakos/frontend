let laptops = []
let getfile = async () => {
    return await fetch('../adatok.json').then(r => r.json()).then(x => x)
}

async function load() {
    laptops = await getfile()
}

load()

let table = document.querySelector('#table')

laptops.forEach(laptop => {
    let tr = document.createElement('tr')
    
    let td1 = document.createElement('td')
    td1.innerText = laptop.id
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerText = laptop.brand
    tr.appendChild(td2)
    
    let td3 = document.createElement('td')
    td3.innerText = laptop.type
    tr.appendChild(td3)
    
    let td4 = document.createElement('td')
    td4.innerText = laptop.description
    tr.appendChild(td4)

    table.appendChild(tr)
})