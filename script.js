// hamburger dropdown menu

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//showing each step after clicking an arrow

const clickMe = document.getElementsByClassName('click-me')[0]
const firstStep = document.getElementsByClassName('first-step')[0]
const firstArrow = document.getElementsByClassName('first-arrow')[0]

clickMe.addEventListener('click', () => {
    firstStep.style.display = 'block'
    firstArrow.style.display = 'block'
})

const secondStep = document.getElementsByClassName('second-step')[0]
const secondArrow = document.getElementsByClassName('second-arrow')[0]


firstArrow.addEventListener('click', () => {
    secondStep.style.display = 'block'
    secondArrow.style.display = 'block'
})

const thirdStep = document.getElementsByClassName('third-step')[0]
const thirdArrow = document.getElementsByClassName('third-arrow')[0]


secondArrow.addEventListener('click', () => {
    thirdStep.style.display = 'block'
    thirdArrow.style.display = 'block'
})

const fourthStep = document.getElementsByClassName('fourth-step')[0]
const fourthArrow = document.getElementsByClassName('fourth-arrow')[0]


thirdArrow.addEventListener('click', () => {
    fourthStep.style.display = 'block'
    fourthArrow.style.display = 'block'
})

const fifthStep = document.getElementsByClassName('fifth-step')[0]
const fifthArrow = document.getElementsByClassName('fifth-arrow')[0]


fourthArrow.addEventListener('click', () => {
    fifthStep.style.display = 'block'
    fifthArrow.style.display = 'block'
})

const sixthStep = document.getElementsByClassName('sixth-step')[0]
const sixthArrow = document.getElementsByClassName('sixth-arrow')[0]


fifthArrow.addEventListener('click', () => {
    sixthStep.style.display = 'block'
    sixthArrow.style.display = 'block'
})

const seventhStep = document.getElementsByClassName('seventh-step')[0]
const seventhArrow = document.getElementsByClassName('seventh-arrow')[0]


sixthArrow.addEventListener('click', () => {
    seventhStep.style.display = 'block'
    seventhArrow.style.display = 'block'
})

const eighthStep = document.getElementsByClassName('eighth-step')[0]
const eighthArrow = document.getElementsByClassName('eighth-arrow')[0]


seventhArrow.addEventListener('click', () => {
    eighthStep.style.display = 'block'
    eighthArrow.style.display = 'block'
})

const ninethStep = document.getElementsByClassName('nineth-step')[0]
const ninethArrow = document.getElementsByClassName('nineth-arrow')[0]


eighthArrow.addEventListener('click', () => {
    ninethStep.style.display = 'block'
    ninethArrow.style.display = 'block'
})

const tenthStep = document.getElementsByClassName('tenth-step')[0]

ninethArrow.addEventListener('click', () => {
    tenthStep.style.display = 'block'
})



