let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(fullName, email, password) {
    const userAlreadyExists = users.some(user => user.email === email);

    if (userAlreadyExists) {
        alert('This email is already registered. Please login.');
    } else {
        const newUser = {
            fullName: fullName,
            email: email,
            password: password
        };
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now login.');
        window.location.href = "index.html";
    }
}


function loginUser(email, password) {
    const existingUser = users.find(user => user.email === email && user.password === password);

    if (existingUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(existingUser));

        window.location.href = "home.html";
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');

    window.location.href = "index.html";
}

function displayUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('navbarUser').innerText = `Welcome, ${loggedInUser.fullName}`;
    } else {
        window.location.href = "index.html";
    }
}

function register(event) {
    event.preventDefault();

    const fullName = document.getElementById('registerFullName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    registerUser(fullName, email, password);
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    loginUser(email, password);

}
