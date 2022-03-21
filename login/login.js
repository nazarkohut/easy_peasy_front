import {setCookie} from "../misc/cookie.mjs";

let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');
submitButton.onclick = (event) => {
    let loginForm = document.getElementById("login-form");
    if (loginForm.checkValidity()) {
        event.preventDefault();
        loginForm = loginForm.getElementsByTagName('input');

        let fields = ['username', 'password'];

        let body = {};
        fields.forEach((key) => {
                body[key] = loginForm[key].value;
            }
        )
        fetch('http://127.0.0.1:8000/auth/login/', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setCookie("access", data['access'], 60);
                    setCookie('refresh', data['refresh'], 60 * 24 * 15);
                    window.location.href = '../problems/problems.html';
                })
            } else {
                response.json().then((data) => {
                    throw data.detail;
                }).catch(e => {
                    if (e) {
                        error.innerHTML = e;
                        error.style = "font-size: 12px; color: red; font-family: \"Dubai Light\", monospace;"
                    }
                });
            }
        }).catch((e) => {
            error.innerHTML = e.message;
        })
    }
}
