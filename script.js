let UserName=document.getElementById("name");
let email=document.getElementById("email");
let phNumber=document.getElementById("phnumber");
var verName=false;
var verEmail=false;
var verphnumber=false;
//when clicking out of input tag we use blur
//show valid or unvalid when user press out of the input tag
UserName.addEventListener("blur",()=>{
    //validate name
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){3,12}$/;
    let str= UserName.value;
    // console.log(reg,str )
    //checking credentail valid or not
    if(reg.test(str))
    {
        console.log("Matched!");
        verName=true;
        UserName.classList.remove("is-invalid");
    }
    else{
        verName=false;
        console.log("Not Match");
        UserName.classList.add("is-invalid");
    }
})

//show valid or unvalid when user press out of the input tag
email.addEventListener("blur",()=>{
    // validate email
    let reg=/^([\_\-\.0-9a-zA-Z]+)@([\_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str= email.value;
    // console.log(reg,str )
    //checking credentail valid or not
    
    if(reg.test(str))
    {
        console.log("Matched!");
        email.classList.remove("is-invalid");
        verEmail=true;
    }
    else{
        verEmail=false;
        console.log("Not Match");
        email.classList.add("is-invalid");
    }
})

//show valid or unvalid when user press out of the input tag
phNumber.addEventListener("blur",()=>{
    //validate phone number 
    let reg=/^([0-9]){10}$/;
    let str= phNumber.value;
    
    //checking credentail valid or not
    if(reg.test(str))
    {
        verphnumber=true;
        console.log("Matched!");
        phNumber.classList.remove("is-invalid");
    }
    else{
        verphnumber=false;
        console.log("Not Match");
        phNumber.classList.add("is-invalid");
    }
})

let submit=document.getElementById("btn");
//user press on submit
submit.addEventListener("click",()=>{
    //if all the credential is valid then the user can submit
    if(verEmail&&verName&&verphnumber){

        let alert=document.getElementById("alert")
        alert.style.display="block";
        alert.style.animationName="animate";
        alert.style.animationDuration="1.2s";  
        setTimeout(() => {
            document.getElementById("alert").style.display="none";
            
        }, 1200);
    }
    

})

var pos=1;   // for the position of button when mouseover event

//mouse move left or right if 
document.getElementById("movebox").addEventListener("mouseover",()=>{

    if(!(verEmail&&verName&&verphnumber)){

         //if the userName is invalid and client tries to submit
        if(!verName) 
        UserName.classList.add("is-invalid");
        //if the email is invalid and client tries to submit
        if(!verEmail)
        email.classList.add("is-invalid");
         //if the phnumber is invalid and client tries to submit
        if(!verphnumber)
        phNumber.classList.add("is-invalid");

    let box=document.getElementById("movebox");
    // if the button is left side then move right
    if(pos==1){
        box.style.marginLeft="250px";
        pos=2;
        setTimeout(() => {
            box.style.marginLeft="0px";
            pos=1;
        }, 4000);
    }
    // if the button is right side then move left
    else if(pos==2)
    {
        box.style.marginLeft="0px";
        pos=1;
    }}
})


