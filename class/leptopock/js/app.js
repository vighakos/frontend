let laptops = []
let getfile = async () => {
    return await fetch('../adatok.json').then(r => r.json()).then(x => x)
}

async function load() {
    laptops = await getfile()
}

load()