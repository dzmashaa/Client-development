function changeBtnColor(btn){
    if(btn.style.backgroundColor == 'rgb(171, 81, 17)'){
        btn.style.backgroundColor = 'ivory';
        btn.style.color = 'rgb(171, 81, 17)'
    }
    else{
        btn.style.backgroundColor = 'rgb(171, 81, 17)';
        btn.style.color = 'ivory'
    }
}

let two_events_btn = document.getElementById('two_events_btn');
two_events_btn.addEventListener("click", function(){
    this.value = "A я додав нову кнопку!";
});

two_events_btn.addEventListener("click", function(){
    document.getElementById('new-btn').style.display = 'inline';
});

let eventHandler = {
    handleEvent(event) {
        alert(event.type + " on " + event.currentTarget + '\nCoordinates :' + event.clientX + ':' + event.clientY);
        if (confirm('Видалити обробник події для цієї кнопки?')) {
            document.getElementById('new-btn').removeEventListener('click', eventHandler);
        }
    }
};
document.getElementById('new-btn').addEventListener('click', eventHandler );

let selectedLi = null;
let tipsList = document.getElementById('tips-list');
tipsList.addEventListener('click', function(event){
    let targetEl = event.target;
    if(targetEl.tagName === 'LI'){
        highlight(targetEl); 
    }  
});

function highlight(item){
    if (selectedLi) {
        selectedLi.classList.remove('highlight');
        }
    selectedLi = item;
    selectedLi.classList.add('highlight');    
}

class Menu{
    constructor(element){
        this.elem = element;
        element.onclick = this.onClick.bind(this);
    }
    onClick(event){
        let action = event.target.dataset.act;
        if(action){
            this[action]();
        }
    }
    info(){
        alert("Виконала студентка групи ІП-22 Дзюба Марія");
    }
    sources(){
        alert("Джерело 1: https://book-ye.com.ua/ \nДжерело 2: https://coma.in.ua/19375 \nДжерело 3: https://nashkiev.ua/culture/tse-10-kafe-knigaren-kieva-yaki-varto-vidvidati");
    }
    contact(){
        alert("Гітхаб: dzmashaa \nТелеграм: @RaCC00ns")
    }
}

new Menu(document.getElementById('menu'));

document.addEventListener('click', function(event){
    let elementId = event.target.dataset.hiddenId;
    if(elementId){
        let el = document.getElementById(elementId);
        el.hidden = !el.hidden;
    } 
})