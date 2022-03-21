let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');
submitButton.onclick = (event) => {
    let loginForm = document.getElementById("register-form");
    if (loginForm.checkValidity()) {
        event.preventDefault();
        loginForm = loginForm.getElementsByTagName('input');

        let fields = ['email', 'username', 'first_name', 'last_name', 'password', 'confirm_password'];

        let body = {};
        fields.forEach((key) => {
                body[key] = loginForm[key].value;
            }
        )
        if (body['password'] !== body['confirm_password']) {
            error.innerHTML = "Passwords didn't match.";
            error.style = "font-size: 12px; color: red; font-family: \"Dubai Light\", monospace;"
            return
        }
        fetch('http://127.0.0.1:8000/auth/register/', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then((response) => {
            if (response.status === 201) {
                window.location.href = '../login/login.html';
            } else {
                response.json().then((data) => {
                    throw data.detail;
                }).catch(e => {
                    if (e) {
                        error.innerHTML = e;
                        error.style = "font-size: 12px; color: red; font-family: \"Dubai Light\", monospace;"
                        console.log(e);
                    }
                });
            }
        }).catch(e => {
            console.log(e)
        })
    }
}
