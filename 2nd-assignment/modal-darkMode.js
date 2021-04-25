const mainBtn=document.querySelector(".mainBtn");
const body=document.querySelector("body");
const modalContainer=document.querySelector(".modal-container");
const modal=document.querySelector('.modal');
const toggle=document.querySelector('.modal-toggle');
const toggleCircle=document.querySelector('.modal-toggle__circle');
const modalDeleteBtn=document.querySelector('.modal-deleteBtn');

window.onload = function () {
    document.documentElement.setAttribute('color-theme', 'light');//default값은 light
};

let modalState=false;//false는 안보임 true는 보임
const clickHandler=(e)=>{
    if(e.target==mainBtn||e.target==modalContainer||e.target==modalDeleteBtn){
        if(!modalState){
            modalContainer.style.display='flex';
            modalState=true;
        }else{
            modalContainer.style.display='none';
            modalState=false;
        }
    }
}

let darkModeState=false;
const darkModeHandler=(e)=>{
    if(darkModeState){
        toggleCircle.style.marginLeft='0px';
        darkModeState=false;
        document.documentElement.setAttribute('color-theme', 'light');
    }else{
        toggleCircle.style.marginLeft='40px';
        darkModeState=true;
        document.documentElement.setAttribute('color-theme', 'dark');
    }
    modalContainer.style.display='flex';
    modalState=false;
    console.log('darkmode');
}
mainBtn.addEventListener('click',clickHandler);
modalContainer.addEventListener('click',clickHandler);
toggle.addEventListener('click',darkModeHandler);
modalContainer.addEventListener('click',clickHandler)


