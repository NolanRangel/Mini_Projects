const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart() {
    // this will refer to whatever element is being grabbed
    this.className += ' hold';
    // timer to give the user time to grab the pic. doesnt need to go above zero, just ensures the above line runs first
    setTimeout(() => {
        this.className = 'invisible';
    }, 0)
}


function dragEnd() {
    this.className = 'fill';
}


function dragOver(e) {
    // prevents drag default behavior to allow the pic to be dropped into a different div
    // refer to MDN doc for default behavior
    e.preventDefault();
}


function dragEnter(e) {
    // prevents drag default behavior to allow the pic to be dropped into a different div
    // refer to MDN doc for default behavior
    e.preventDefault();
    this.className += ' hovered'
}


function dragLeave() {
    // resets the class to emtpy for styling
    this.className = 'empty'

}


function dragDrop() {
    this.className = 'empty';
    // adds the div element will class of fill
    this.append(fill)
}

