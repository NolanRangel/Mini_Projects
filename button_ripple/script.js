const buttons = document.querySelectorAll('.ripple');


buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // x and y location of the click within the window
        const x = e.clientX;
        const y = e.clientY;

        // top and left location of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // get location of the click by subtracting the location of the click in the window by the location of the button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // timer to remove circle from the dom because its added and never removed unless removed
        setTimeout(() => circle.remove(), 500)

    })
})