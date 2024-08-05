const invalidHeroEmail = document.getElementById('invalid-hero-email')
const invalidAccessEmail = document.getElementById('invalid-access-email')

const heroEmailInput = document.getElementById('hero-email')
const accessEmailInput = document.getElementById('access-email')

const heroSubmitBtn = document.getElementById('hero-submit-btn')
const accessSubtmiBtn = document.getElementById('access-submit-btn')


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

heroSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = heroEmailInput.value.trim()
    if(validateEmail(email)) {
        invalidHeroEmail.classList.remove('active')
        heroEmailInput.classList.remove('active')
    } else {
        invalidHeroEmail.classList.add('active')
        heroEmailInput.classList.add('active')
    }
})

accessSubtmiBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = accessEmailInput.value.trim()
    if(validateEmail(email)) {
        invalidAccessEmail.classList.remove('active')
        accessEmailInput.classList.remove('active')
    } else {
        invalidAccessEmail.classList.add('active')
        accessEmailInput.classList.add('active')
    }
})
