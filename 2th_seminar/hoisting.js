var a='hello';
function hello(){
    if(true){
        var b=5;
        let c=false;
    }
}
function hoisting(){
    console.log(d);
    console.log(e);
    var d='be';
    let e='sopt';
    function f(){
        console.log('28th');
    }
}

hoisting();