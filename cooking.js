const para = document.querySelector('p');
const btns = document.querySelectorAll('button[class=selection]');
const ingredients = [];
btns.disabled = false;

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        ingredients.push(toString(btn.textContent));
        if (ingredients.length = 5){
            document.querySelectorAll('button[class=selection]').disabled = true
        };
        para.textContent += btn.textContent + ', ';
    })
})
