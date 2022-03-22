import {getCookie} from '../misc/cookie.mjs';

let problemList = document.getElementById('problem-list');
let problemComplexity = {1: 'Easy', 2: 'Medium', 3: 'Hard'};
let problemComplexityStyles = {1: 'green', 2: 'yellow', 3: 'red'};
fetch('http://127.0.0.1:8000/problem/all/', {
    method: 'GET',
    headers: {'Authorization': `Bearer ${getCookie('access')}`}
}).then((response) => {
    if (response.status === 200) {
        return response.json();
    }
    window.location.href = '../403_page.html'
}).then(data => {
    let keys = ['id', 'task', 'complexity', 'accepted'];//, 'attempts'];
    data.forEach((obj) => {
        let listElement = document.createElement('tr')
        listElement.className = 'problem-box'

        let bar = document.createElement('div');
        bar.className = 'a-a-bar'

        let correctnessBar = document.createElement('div');
        correctnessBar.className = 'ac-a-a-bar';
        keys.forEach((key) => {
            let content = document.createElement('td');

            if (key === 'id') {
                content.className += ' first-column'
            }
            content.innerHTML = obj[key];
            if (key === 'complexity') {
                if (problemComplexity.hasOwnProperty(content.innerHTML)){
                    content.style.color = problemComplexityStyles[content.innerHTML];
                    content.innerHTML = problemComplexity[content.innerHTML];
                } else{
                    content.style.color = problemComplexityStyles[1];
                    content.innerHTML = problemComplexity[1];
                }
            }
            // Creating percentage bar of acceptance
            if (key === 'accepted') {
                if (obj[key] === 0 || obj['attempts'] === 0) {
                    content.innerHTML += '/' + obj['attempts'];
                    correctnessBar.innerHTML = content.innerHTML;
                    correctnessBar.style.color = 'red';
                    content.innerHTML = '';
                    correctnessBar.style.width = '0%'
                } else {
                    content.innerHTML += '/' + obj['attempts'];
                    correctnessBar.innerHTML = content.innerHTML;
                    content.innerHTML = '';
                    let percentage = Number(obj['accepted']) * 100 / obj['attempts'];
                    correctnessBar.style.width = String(percentage) + '%'
                }
                bar.appendChild(correctnessBar);
                content.appendChild(bar)
            }
            listElement.appendChild(content);
        })
        problemList.appendChild(listElement)
    })
}).catch((e) => {
    console.log(e);
})

