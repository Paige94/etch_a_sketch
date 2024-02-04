const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.toggle('gridDiv');
}

const divs = document.querySelectorAll('.gridDiv');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    })
})