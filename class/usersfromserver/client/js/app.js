async function getUsers() {
    let url = 'http://localhost:3000/users'

    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers()
    let container = document.querySelector('#container')

    users.forEach(user => {
        container.innerHTML += `<div class="user">email: ${user.email}
        firstName: ${user.firstname}
        lastName: ${user.lastname}
        gender: ${user.gender}
        username: ${user.username} </div>`
    });
}

renderUsers()