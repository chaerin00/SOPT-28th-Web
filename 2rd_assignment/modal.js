const mainBtn=document.querySelector(".mainBtn");
const body=document.querySelector("body");
const modalContainer=document.querySelector(".modal-container");
const modal=document.querySelector('.modal');
const toggle=document.querySelector('.modal-toggle');
const toggleCircle=document.querySelector('.modal-toggle__circle');

let modalState=false;//false는 안보임 true는 보임
const clickHandler=(e)=>{
    if(e.target==mainBtn||e.target==modalContainer){
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
        mainBtn.style.backgroundColor='rgb(54, 116, 248)';
        body.style.backgroundColor='aliceblue';
        toggleCircle.style.marginLeft='0px';
        toggle.style.backgroundColor='grey';
        darkModeState=false;
    }else{
        mainBtn.style.backgroundColor='grey';
        body.style.backgroundColor='rgb(0,0,0,0.8)';
        toggleCircle.style.marginLeft='40px';
        toggle.style.backgroundColor='rgb(54, 116, 248)';
        darkModeState=true;
    }
    modalContainer.style.display='none';
    modalState=false;
    console.log('darkmode');
}
mainBtn.addEventListener('click',clickHandler);
modalContainer.addEventListener('click',clickHandler);
toggle.addEventListener('click',darkModeHandler);
