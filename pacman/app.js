let tablematrix = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 0],
    [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 6, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 5, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 0, 0, 1, 7, 8, 9, 1, 0, 0, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 10, 0, 1, 2, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0],
    [0, 1, 3, 2, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 2, 3, 1, 0],
    [0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];

generateTable();
pacman = document.querySelector('.pacman')

document.addEventListener('keydown', (e) => {
    var name = e.key;
    var code = e.code;

    switch (code) {
        case "KeyA":
        case "ArrowLeft":
            balraNyomoka()
            pacman.classList.add('left')
            pacman.classList.remove('up')
            pacman.classList.remove('down')
            pacman.classList.remove('right')
            break;
    
        case "KeyS":
        case "ArrowDown":
            leNyomoka()
            pacman.classList.add('down')
            pacman.classList.remove('up')
            pacman.classList.remove('left')
            pacman.classList.remove('right')
            break;
    
        case "KeyD":
        case "ArrowRight":
            jobbraNyomoka()
            pacman.classList.add('right')
            pacman.classList.remove('up')
            pacman.classList.remove('down')
            pacman.classList.remove('left')
            break;
    
        case "KeyW":
        case "ArrowUp":
            felNyomoka()
            pacman.classList.add('up')
            pacman.classList.remove('left')
            pacman.classList.remove('down')
            pacman.classList.remove('right')
            break;
    }
})

function generateTable() {
    let classname = '';
    let gametable = document.querySelector('#gametable');
    let table = document.createElement('table');
    gametable.appendChild(table);
    for (let i = 0; i < 21; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < 21; j++) {
            let td = document.createElement('td');
            switch (tablematrix[i][j]) {
                case 0:
                    { classname = 'empty'; break; }
                case 1:
                    { classname = 'wall'; break; }
                case 2:
                    { classname = 'food'; break; }
                case 3:
                    { classname = 'bigfood'; break; }
                case 4:
                    { classname = 'pacman'; break; }
                case 5:
                    { classname = 'door'; break; }
                case 6:
                    { classname = 'ghost1'; break; }
                case 7:
                    { classname = 'ghost2'; break; }
                case 8:
                    { classname = 'ghost3'; break; }
                case 9:
                    { classname = 'ghost4'; break; }
                case 10:
                    { classname = 'ghost5'; break; }
            }
            td.classList.add(classname);
            tr.appendChild(td);
        }
    }
}

function jobbraNyomoka(){
    // ha meg can nyomva, akkor jobbra mozgál

    
}

function balraNyomoka() {
    
}

function felNyomoka() {
    
}

function leNyomoka() {
    
}

