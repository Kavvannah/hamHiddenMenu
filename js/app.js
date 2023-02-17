const bttn = document.querySelector('#btn');
const nav = document.querySelector('#nav');

bttn.addEventListener('click', () => {
    // btn.preventDefault();
    nav.classList.toggle('active');
    bttn.classList.toggle('active');
});