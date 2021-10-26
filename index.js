// alert("Hello Hero");

// console.log("Hello World", 4+6, "Another log");
// console.warn("This is a warning");
// console.error("This is an error");
// var number1=34;
// var number2=56;
// console.log(number1+number2);

// var num1=456;
// var num2=777;
// var str1="This is a string";
// var str2="This is also a string";
// var marks={
//     ravi:34,
//     shubham:56,
//     harrry:99.97,
// }
// console.log(marks);

// var a=true;
// var b=false;
// console.log(a,b);

// var und;
// console.log(und);undifined means we had not assigned anything to the variable

// var n=null;
// console.log(n);null means we assigned null to variable


// There are two types of data types in JavaScript
// 1.primitive data type: undefined, null, number,string,boolean,symbol
// 2. Reference data types: Arrays abd objects

// var arr=[1,2,"string",4,5]




// var a =34;
// var b=56;
// console.log("The vlaue of a+b is",a+b);

// var c=b;

// c-=2;
// c+=2;

// var x=34;
// var y=56;
// console.log(x==y);
// console.log(y>=x);

// console.log(true && true);

// console.log(true || false);


// console.log(!true);
// console.log(!false);








// function avg(a,b){
//     h=(a+b)/2;
//     return h;
// }

// z=avg(5,5);
// k=avg(14,16);
// console.log(z,k);

// console.log(true+1);














// var age=34;
// if(age>18){
//     console.log("You ere elegible to drive");
// }
// else{
//     console.log("First grow up");
// }
// if without else also works


// if(age>18){
//     console.log("You ere elegible to drive");
// }
// else if(age<15){
//     console.log("First grow up");
// }
// else{
//     console.log("Jinda Dil");
// }



// var arr=[1,2,3,4,5,6]
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// console.log("break");
// let is new javascript standard by using let we make block level variable by this good utilisation of memory management happens.
// let j=0;
// const ac=0;const variable cannot be changed

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// console.log("Again break");
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);



// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.toString();
// arr.sort();

// String Method in JavaScript

// let myLovelyString="Harry is a good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(1,4));
// d=myLovelyString.replace("Harry","Akshat");
// console.log(d,myLovelyString);


// let myDate=new Date();
// // console.log(myDate);.

// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear()); 
// console.log(myDate.getMonth());
// console.log(myDate.getHours());



// DOM Manipulation

// let elem=document.getElementById("click");
// console.log(elem);

// let elemClass=document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background="yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// tn=document.getElementsByTagName('div');
// console.log(tn);
// createdElement=dpcument.createdElement('p');
// createdElement.inneerText="This is a created para";
// tn[0].appendChild(createdElement);
// createdelement2=document.createElement('b');
// createdElement2.inneerText="This is a created bold";
// tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element);
// document.title;
// document.URL;
// document.images;
// document.domain;

// Selecting using query
// sel=document.querySelector('.container');
// console.log(sel);
// sel=document.querySelectorAll('.container');
// console.log(sel);


// function clicked(){
//     console.log("The button was clicked");
// }



// window.onload=function(){
//     console.log("The document was loaded");
// }

// Events in JavaScript
// firstContainer.addEventListener('click',function(){
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })

  


// let summ;
// Arrow Functions
// function summm(a,b){
//     return a+b;
// }
// summ=(a,b)=>{
//     return a+b;
// }


// logKaro=()=>{
//     console.log("I am a log");

// }

// SetTimeout and setinterval
// clr=setTimeout(logKaro,4000);
// clearTimeout(clr) is used to stop setTimeout() and setInterval()
// In setTimeout() function called after a given time


// setInterval(logKaro,2000);
// setInterval() used for repeatedly calling the function




//  JavaScript Localstorage used to save data in user's screen

// console.log(localStorage.setItem('Akshat',16));
// localStorage.clear();
// Don't store sensitive data in localStorage because they can be seen through browser inspect



// JSON
// string can be easily transfered through local storage
// Json is an open standard file format which is used to tranfer data in browser
// obj={name:"Akshat Kumar",length:1,a:{this:"\\\"that"}}
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// // Json standard required only double quote but we can use single as well as double cote in javascript
// console.log(jso);

// parsed=JSON.parse(`{name:"Akshat Kumar",length:1,a:{this:"that"}}`);
// console.log(parsed);
// Template literal - Backtick

// ECMAScript maintains JavaScript standard
// a=34;
// console.log(`This is my ${a}`);