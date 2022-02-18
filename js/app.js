const btn = document.querySelector('.btn');
const label = document.querySelector('.label');

function generagte() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*+_-|';
    const passLength = 16;
    let pass = '';
    for (let i = 0; i < passLength; i++) {
        let rnd = Math.floor(Math.random() * chars.length)
        pass += chars.charAt(rnd)
    }
    label.innerText = pass;
    label.style.letterSpacing = '2';
}

btn.addEventListener('click', generagte);
