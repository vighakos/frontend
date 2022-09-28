let pontok = []

for (let i = 0; i < 20; i++) {
    pontok.push(new Tpont(0, 0))
    pontok[i].randomGen(-10, 10)
}

console.clear()
_1()
_2()
_3()


function _3() {
    let db = 0
    pontok.forEach(item => {
        if (item.y > 0) db++
    })

    console.log(`A pontok ${(db / 20 * 100).toFixed(2)}%-ával van vmi`);
}

function _2() {
    let vanX = false
    let vanY = false
    for(i = 0; i < pontok.length; i++){
        if (pontok[i].x == 0) {
            vanX = true
        }
        if (pontok[i].y == 0) {
            vanY = true
        }
    }

    if (vanX) console.log('van X')
    else if (vanY) console.log('van Y')
    else if (vanX && vanY) console.log('van X Y')
    else console.log('nincs')
}

function _1() {
    let van = false
    for(i = 0; i < pontok.length; i++){
        if (pontok[i].x == 0 || pontok[i].y == 0) {
            van = true
        }
    }

    if (van) console.log('van')
    else console.log('nincs')
}
