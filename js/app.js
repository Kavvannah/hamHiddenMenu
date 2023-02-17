const btn = document.getElementById('#btn');
const nav = document.getElementById('#nav');

btn.addEventListener('click', e => {
    btn.preventDefault();
    nav.classList.toggle('active')
});