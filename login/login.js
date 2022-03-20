import {clearCookie, getCookie, setCookie} from "../misc/cookie.mjs";

let submitButton = document.querySelector('.submit-button');
submitButton.onclick = (event) => {
    event.preventDefault();
    clearCookie('access_token');
    let loginForm = document.getElementById("login-form").getElementsByTagName('input');
    let fields = ['username', 'password'];

    let body = {};
    fields.forEach((key) => {
            body[key] = loginForm[key].value;
        }
    )
    console.log(body);
    fetch('http://127.0.0.1:8000/auth/login/', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else{
            response.json().then(data => {
                fields.forEach((field) => {
                    if(data.hasOwnProperty(field)){
                        // think how to show error in here
                        // loginForm.namedItem(field).value = data[field];
                        // console.log("Here", data[field])
                    }
                })
            })
        }
    }).then(data => {
        console.log(data['access']);
        setCookie("access", data['access'], 60);
        setCookie('refresh', data['refresh'], 60*24*15);
        window.location.href = '../problems/problems.html';
    }).catch((e) => {
        console.log(e);
    })
}

// json to login
//{
//     "username": "testuser",
//     "password": "password"
// }
