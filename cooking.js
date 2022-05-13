const para = document.querySelector('p');
const btns = document.querySelectorAll('button[class=selection]');
const ingredients = [];
const clear = document.querySelector('.clear');
clear.disabled = true;
const enter = document.querySelector('.enter');
enter.disabled = true;

function btnsDisable(){
    for(i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }
};

function btnsEnable(){
    for( i= 0; i < btns.length; i++){
        btns[i].disabled = false;
    }
};

function remove() {
    for(i = ingredients.length; i > 0; i--){
        ingredients.pop();
    };
};

/--eventListeners for all ingredient buttons--/
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        ingredients.push(btn.textContent);
        para.textContent += btn.textContent + ', ';
        if (ingredients.length > 0){
            clear.disabled = false;
            enter.disabled = false;
        };
        if (ingredients.length === 5){
        btnsDisable();
        }
    });
})



clear.addEventListener('click', event => {
    remove();
    para.textContent = 'Selected Ingredients: ';
    clear.disabled = true;
    enter.disabled = true;
    btnsEnable();
})


enter.addEventListener('click', event => {
    
})
