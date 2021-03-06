window.onload = function(){

const inputEls = document.querySelectorAll('input');
const submitBtn = document.querySelector('.submitBtn');
const useGuidEl = document.querySelector('.useGuid');
const label = document.querySelectorAll('label');
const textArea = document.querySelector('textarea');
const head = document.querySelector('head');

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
        fontSet[label[i].id] = inputEls[i].value;
    }
    textArea.setAttribute('style', fontSet.Css);
    textArea.style.fontSize = fontSet.FontSize+'px';
    textArea.style.fontWeight = fontSet.FontWeight;
    textArea.style.lineHeight = fontSet.LineHeight+'px';
    head.innerHTML += fontSet.Link;
    
});




}