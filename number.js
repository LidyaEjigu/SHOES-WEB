let check=document.querySelector(".check");
let number=document.querySelector(".number");
let text =document.querySelector(".text");

let regex= /^[\d,\s,\+,\-]{5,20}/;
check.addEventListener("click",()=>{
    if(number.value ==""){
        text.innerText="please Enter your phone number";
        text.style.color="#fff";
    }
    else if(number.value.match(regex)){
        text.innerText="congrats! you Enter a valid number";
        text.style.color="rgba(4,125,9,1)";
    }
    else{
        text.innerText="opps! your phone number is invalid";
        text.style.color="#da3400";
    }
});