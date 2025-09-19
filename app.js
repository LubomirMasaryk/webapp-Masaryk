const btn = document.getElementById('colorBtn');
const colors = ['red', 'lightblue', 'pink', 'yellow', 'green'];

btn.addEventListener('click', () => {
    let randomColor;
    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === document.body.style.backgroundColor);
    document.body.style.backgroundColor = randomColor;
});
