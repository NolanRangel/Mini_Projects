const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');



toggle.addEventListener('click', () => {
    if (nav.classList.value === 'active') {
        nav.classList.remove('active')
    } else {
        nav.classList.add('active')
    }
})