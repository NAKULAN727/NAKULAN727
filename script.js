document.addEventListener('DOMContentLoaded',()=>{
    const counterElement=document.getElementById('counter');
    const incrementbutton=document.getElementById('incrementbutton');
    const decrementbutton=document.getElementById('decrementbutton');

    let count=0;

    incrementbutton.addEventListener('click',()=>{
        count++;
        counterElement.textContent=count;
    })

    
    decrementbutton.addEventListener('click',()=>{
        count--;
        counterElement.textContent=count;
})
})