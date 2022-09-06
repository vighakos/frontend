let form = document.querySelector('form'),
    button = document.querySelector('#button'),
    gombok = document.getElementsByTagName('input'),
    arr = Array.prototype.slice.call( gombok ),
    eletkor = 72


button.addEventListener('click', () => {
    arr.forEach(element => {
        if (element.checked && element.value != "") {
            eletkor += parseInt(element.value)
        }
    });
    console.log(eletkor);
})

