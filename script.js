document.querySelector('#mainButtons').querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.value == 'login' ? location.href = 'login.html' : location.href = 'register.html';
    });
})

function registerUser() {
    users = JSON.parse(localStorage.getItem('users'));

    if (users == undefined)
        users = [];

    
}