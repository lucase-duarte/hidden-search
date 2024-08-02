const button = document.querySelector('button')
const placeholder = document.querySelector('.placeholder')
const input = document.querySelector('input')

    button.addEventListener('click', () => {
        placeholder.classList.toggle('active')
        input.focus()
    })