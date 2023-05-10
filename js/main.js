const tittle = document.querySelector('.typing')

function typingLetter(element) {
    const arrText = element.innerHTML.split('')
    element.innerHTML = ''
    arrText.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter
        }, 75 * i)
    })
}
typingLetter(tittle)



const showMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .first-navigation')



showMenu.addEventListener('click', () => {
    showMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('Activated')
})


