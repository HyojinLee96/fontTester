window.onload = function(){

const formEl = document.querySelector('form');
const inputEls = document.querySelectorAll('input');
const submitBtn = document.querySelector('.submitBtn');
const useGuidEl = document.querySelector('.useGuid');
const label = document.querySelectorAll('label');
const textArea = document.querySelector('textarea');
const head = document.querySelector('head');
const link = document.querySelector('head > link')

useGuidEl.addEventListener('click', function(e){
    e.preventDefault();
    e.target.classList.toggle('on')
});

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let fontSet = {
        FontSize: '',
        FontWeight: '',
        LineHeight: '',
        Link: '',
        Css: '',
    }
    for(let i = 0; i <inputEls.length; i++){
        fontSet[label[i].id] = label[i].childNodes[1].value;
    }
    textArea.setAttribute('style', fontSet.Css);
    textArea.style.fontSize = fontSet.FontSize+'px';
    textArea.style.fontWeight = fontSet.FontWeight;
    textArea.style.lineHeight = fontSet.LineHeight+'px';
    head.innerHTML += fontSet.Link;
    
});




}