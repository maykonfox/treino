'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className= document.body.className;
    if(className=="ligth-theme") {
        this.textContent="dark";
    } else{
        this.textContent= "ligth";
    }
});