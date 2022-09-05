let piros = document.getElementById('red'),
    zold = document.getElementById('green'),
    kek = document.getElementById('blue'),
    doboz = document.getElementById('szin')

doboz.style.backgroundColor = `rgb(${red.value}, ${zold.value}, ${kek.value})`;

piros.addEventListener('change', () => {
    doboz.style.backgroundColor = `rgb(${red.value}, ${zold.value}, ${kek.value})`;
})

zold.addEventListener('change', () => {
    doboz.style.backgroundColor = `rgb(${red.value}, ${zold.value}, ${kek.value})`;
})

kek.addEventListener('change', () => {
    doboz.style.backgroundColor = `rgb(${red.value}, ${zold.value}, ${kek.value})`;
})
