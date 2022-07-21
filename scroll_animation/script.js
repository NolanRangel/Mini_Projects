const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom);

    boxes.forEach(box => {
        // returns a DOMRect(size and position of a rectangle) info providing the size of an element and its position relative to the viewport
        // .top is the top value
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}