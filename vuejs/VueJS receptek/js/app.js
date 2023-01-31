var app = new Vue({
    el: '#app',
    data: {
        title: 'Receptkönyv App',
        message: 'Hello Vue!',
        author: '2/14.szft Szoftverfejlesztők',
        company: 'Bajai SZC Türr István Technikum',
        receptek: [],
        recept: {},
        currentRoute: window.location.pathname,
        editmode: false
    },
    created() {
        this.frissit();
    },
    methods: {
        felvesz() {

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.recept.name,
                    description: this.recept.description
                })
            };

            fetch("http://localhost:3000/receptek", requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.ID = data.ID;
                    this.frissit();
                    this.recept = {};
                })

        },

        kivalaszt(id) {
            this.editmode = true;
            fetch("http://localhost:3000/receptek/" + id)
                .then(response => response.json())
                .then(data => (this.recept = data[0]));
        },

        megsem() {
            this.editmode = false;
            this.recept = {};
        },

        modosit(id) {
            const requestOptions = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.recept.name,
                    description: this.recept.description
                })
            };

            fetch("http://localhost:3000/receptek/" + id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.ID = data.ID;
                    this.frissit();
                    this.recept = {};
                    this.editmode = false;
                })
        },

        torles(id) {
            fetch('http://localhost:3000/receptek/ID/' + id, { method: 'DELETE' })
                .then(() => {
                    alert('Recept törölve');
                    this.frissit()
                });
        },

        frissit() {
            fetch("http://localhost:3000/receptek")
                .then(response => response.json())
                .then(data => (this.receptek = data));
        }
    }

});