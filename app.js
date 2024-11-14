const telEl = document.querySelector(".tel")
const btnEl = document.querySelector(".btn")

const TEL_NUMBERS = [
    "+998 95 947 33 23",
    "+998 90 123 45 67",
    "+998 99 876 54 32",
    "+998 91 555 55 55",
    "+998 97 234 56 78",
    "+998 93 345 67 89",
    "+998 94 456 78 90",
    "+998 95 567 89 01",
    "+998 91 678 90 12",
    "+998 97 789 01 23",
    "+998 93 890 12 34",
    "+998 94 901 23 45",
    "+998 95 012 34 56",
    "+998 90 123 45 67"
]

function getRandomNumber () {
    btnEl.setAttribute("disabled", true)

    const interval = setInterval(()=> {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
        telEl.innerHTML = TEL_NUMBERS[randomNumber]
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        btnEl.removeAttribute("disabled")
    }, 2500);

}
