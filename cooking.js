const para = document.querySelector('p');
const btns = document.querySelectorAll('button[class=selection]');
const ingredients = [];
const clear = document.querySelector('.clear');
clear.disabled = true;
const enter = document.querySelector('.enter');
enter.disabled = true;

/--eventListeners for all ingredient buttons--/
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        ingredients.push(btn.textContent);
        para.textContent += btn.textContent + ', ';
    });
})


clear.addEventListener('click', event => {
    for(i = ingredients.length; i > 0; i--){
        ingredients.pop();
    };
    para.textContent = 'Selected Ingredients: ';
})


enter.addEventListener('click', event => {
    
})
