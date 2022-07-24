const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    // grab each letter and split into an array, loop over with map and add a span with transition to each letter and join back into a string 
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})