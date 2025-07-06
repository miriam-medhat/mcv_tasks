let rocket = document.getElementById('img')
let btn = document.getElementById('btn')

function moveup(){
    rocket.classList.add('launching')
}

btn.addEventListener('click', moveup)