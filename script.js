const LowercaseChars = "abcdefghijklmnopqrstuvwxyz"
const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NumbersChars = "0123456789"
const SymbolsChars = "~!@#$%^&*?<>=-+"

const Uppercase = document.querySelector('#uppercase')
const Numbers = document.querySelector('#numbers')
const Symbols = document.querySelector('#symbols')
const Password = document.querySelector('#password')
const Slider = document.querySelector('.slider')
const Value = document.querySelector('.value')
const Button = document.querySelector('.inputs button')

Slider.addEventListener('input', () => {
    Value.textContent = Slider.value
})

function mimashengcheng() {
    const length = Number(Slider.value)
    let chars = LowercaseChars
    if (Uppercase.checked) {
        chars += UppercaseChars
    }
    if (Numbers.checked) {
        chars += NumbersChars
    }
    if (Symbols.checked) {
        chars += SymbolsChars
    }
    let password = ''
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length)
        password += chars[index]
    }
    Password.value = password
}

Button.addEventListener('click', () => {
    mimashengcheng()
})

mimashengcheng()