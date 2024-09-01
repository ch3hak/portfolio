const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const header = document.querySelector('.header')

open_btn.addEventListener('click', () => {
    header.classList.toggle('visible')
})

close_btn.addEventListener('click', () => {
    header.classList.remove('visible')
})