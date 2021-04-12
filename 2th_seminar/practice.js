// function hoisting(){
//     var d;
//     let e;
//     function f(){
//         console.log('28th');
//     }
//     console.log(d);
//     console.log(e);
//     var d='be';
//     let e='sopt';
// }

//hoisting();

const arrTest=()=>{const a=null;
console.log(typeof a);

const arr=[1,2,3];
const arr2=new Array(1,2,3);
console.log(arr);
console.log(arr2);

for(let element of arr){
    console.log(element);
}

console.log("forEach 출력:");
arr.forEach((element,index)=>{
    console.log(element);
    console.log(index);
});

const arr3=arr.concat(arr2);
console.log(`length:${arr3.length}`);

const arr4=['be','sopt','web','part'];

const arr5=arr4.map(item=>item+'🎈');
console.log(arr5);
}

arrTest();

const objectTest=()=>{
    const CL={
        name: 'chaerin',
        age: 22,
        lang:['Kor'],
        sayHi:()=>{
            console.log(this.name);
        },
    }
    console.log(CL.sayHi());
}
objectTest();

const first=()=>{
    setTimeout(()=>{
        console.log('first함수:first');
        second();
    },1000);
}
const second=()=>{
    console.log('second');
}

first(second);

// const getCoffee=(coffee)=>{
//     setTimeout(()=>{
//         coffee='Ice Americano';
//         console.log(coffee);
//     },1000);
// }
// let coffee=null;
// getCoffee(coffee);

const getCoffee=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ice americano'),3000);
});
getCoffee
.then((result)=>console.log(result))
.catch((e)=>console.log(e))

// const getUserData=new Promise((resolve,reject)=>{
//     const data=fetch("https://api.github.com/users/chaerin00");
//     resolve(data);
//     console.log(data);
// })

const getUserData=async ()=>{
    const response=await fetch("https://api.github.com/users/chaerin00");
    const data=await response.json();
    console.log(data);
}
getUserData();

const myName=prompt("이름을 입력하시오");
console.log(myName);