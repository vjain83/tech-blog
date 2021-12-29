async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            alert('You are logged in!')
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
function actionTaken() {
    const signUpAction = document.querySelector('#signup-action').value

    if (signUpAction) {
        document.location.replace('signup')
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

