//Interface - Menu
for(let i = 0; i < dataJson.menu.length; i++) {
    let menuFocus = document.querySelector(`.menu-area nav ul li:nth-child(${i+1})`);
    menuFocus.classList.add(dataJson.menu[i].id);
    menuFocus.innerHTML = `<span>${dataJson.menu[i].span}</span>${dataJson.menu[i].name}</li>`;
}



//Tamanho do traço horizontal
    let monitorWidth = document.querySelector('body').clientWidth;
    let headerContentAreaWidth = document.querySelector('.header-content-area').clientWidth;
    let offsetLeft = document.querySelector('.menu-area').offsetLeft;
    let spaceBetweenBodyAndHeadercontent = (monitorWidth - headerContentAreaWidth)/2;
    let distanceBetweenFlexStartAndMenu = offsetLeft - spaceBetweenBodyAndHeadercontent;
    let logoWidth = document.querySelector('.logo--area').clientWidth;
    let hrzLine = document.querySelector('.hrz--line');
    hrzLine.style.width = `${distanceBetweenFlexStartAndMenu - monitorWidth * 0.033333}px`;

//Posicionamento do traço Horizontal
    let headerTopSpacing = document.querySelector('.header').offsetTop;
    let menuHeight = document.querySelector('.menu-area').clientHeight;
    let middleOfHeaderHeight = (menuHeight + headerTopSpacing) / 2;

    hrzLine.style.top = `${middleOfHeaderHeight}px`;
    hrzLine.style.left = `${spaceBetweenBodyAndHeadercontent + monitorWidth * 0.033333 }px`;
    hrzLine.style.marginLeft = `${monitorWidth * 0.033333 * 1.33333}px`;

    hrzLine.style.display = 'none';














homeInterface();









//Interface Functions

    //Remove Page Active Class
    function pageActiveClassRemoval() {
        for(let i = 0; i < dataJson.menu.length; i++) {
            if (document.querySelector(`.web-site-pages .page:nth-child(${i+1})`).classList.contains('page-active')){
                document.querySelector(`.web-site-pages .page:nth-child(${i+1})`).classList.remove('page-active');
                break;
            }

        }
    }


    //Interface - Home
    function homeInterface() {
        document.querySelector('.home-body').classList.add('page-active');


        document.querySelector('body').style.backgroundImage = `url('${dataJson.pages[0].home[0].url}')`;
        document.querySelector('.text-area h5').innerHTML = `${dataJson.pages[0].home[0].textArea.h5}`;
        document.querySelector('.text-area h1').innerHTML = `${dataJson.pages[0].home[0].textArea.h1}`;
        document.querySelector('.text-area span').innerHTML = `${dataJson.pages[0].home[0].textArea.bodyText}`;
        document.querySelector('.explore-button-white h4').innerHTML = `${dataJson.pages[0].home[0].button.text}`;
    }

    function destinationInterface() {
        document.querySelector('.destination-body').classList.add('page-active');
        document.querySelector('body').style.backgroundImage = `url('${dataJson.pages[1].destinations[0].url}')`;
    }

//Interaction Functios

    function menuClick(elementId){
        for(let i = 0; i < dataJson.menu.length; i++){
            if (document.querySelector(`.menu-area nav ul li:nth-child(${i+1})`).classList.contains('menu-active')){

                document.querySelector(`.menu-area nav ul li:nth-child(${i+1})`).classList.remove('menu-active');

            }
        }
        document.querySelector(`.menu-area nav ul li:nth-child(${elementId + 1})`).classList.add('menu-active');

        switch (elementId) {
            case 0:
                pageActiveClassRemoval();
                homeInterface();
                break;
            case 1: 
                pageActiveClassRemoval();
                destinationInterface();
                break;
        }

    }



//Eventss

    document.querySelector('.explore-button-white').addEventListener('mouseover', ()=>{
        document.querySelector('.explore-button').classList.add('visible'); 
    }); 

    document.querySelector('.explore-button-white').addEventListener('mouseout', ()=>{
        document.querySelector('.explore-button').classList.remove('visible'); 
    }); 

    document.querySelector('.explore-button-white').addEventListener('click', ()=>{
        document.querySelector('.home-body').classList.remove('page-active');
        document.querySelector('.first-menu').classList.remove('menu-active');
        document.querySelector('.destination-body').classList.add('page-active');
        document.querySelector('.second-menu').classList.add('menu-active');
    }); 


