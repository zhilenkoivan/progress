const circle = document.querySelector('.progress-ring__circle')
const inputValue = document.querySelector('.percent')
const radius = circle.r.baseVal.value 
const circumference = 2 * Math.PI * radius

inputValue.addEventListener('change', () => {
    let valuePercent = inputValue.value
    if(valuePercent >= 0 && valuePercent <= 100){
        setProgress(valuePercent)
        document.querySelector('.error').style.display = 'none'
    } else {
        document.querySelector('.error').style.display = 'block'
    }
})

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset
}

function animated() {
    const animate = document.getElementById('animate')
    if (animate.checked) {
        circle.classList.add("cirlce-animate")
    } else {
        circle.classList.remove("cirlce-animate")
    }
}

function hid() {
    const inputHide = document.getElementById('hide')
    if (inputHide.checked) {
        document.querySelector('.progress-border').style.opacity = '0'
    } else {
        document.querySelector('.progress-border').style.opacity = '1'
    }
}