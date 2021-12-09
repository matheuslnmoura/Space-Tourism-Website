let qs = document.querySelector; 
let qsa = document.querySelectorAll;


document.querySelector('.explore-button-white').addEventListener('mouseover', ()=>{
    document.querySelector('.explore-button').classList.add('visible'); 
}); 

document.querySelector('.explore-button-white').addEventListener('mouseout', ()=>{
    document.querySelector('.explore-button').classList.remove('visible'); 
}); 

document.querySelector('.explore-button-white').addEventListener('click', ()=>{
    document.querySelector('.home-body').classList.remove('page-active'); 
    document.querySelector('.destination-body').classList.add('page-active'); 
}); 


