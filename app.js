const btn = document.querySelector('#button')
const content = document.querySelector('#content')

btn.addEventListener('click', btnClick)

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains('content-hidden')) {
        btn.textContent = "Close block";
    } else {
        btn.textContent = "Open block"

    }

    content.classList.toggle("content-hidden")
}