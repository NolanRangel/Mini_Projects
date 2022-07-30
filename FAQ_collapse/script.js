const faq = document.querySelectorAll('.faq');
const button = document.querySelectorAll('.faq-toggle');


button.forEach((b) => {
    b.addEventListener('click', () => {
        if (b.parentNode.classList[1] === 'active') {
            removeClassActive()
        } else {
            removeClassActive()
            b.parentNode.classList.toggle('active')
        }

    })
})

const removeClassActive = () => {
    faq.forEach((f) => {
        f.classList.remove('active')
    })
}