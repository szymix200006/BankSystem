const myButClose = document.querySelector(".closing");
const myButSubmit = document.querySelector(".submit");
const myButDeposit = document.querySelector("#deposit");
const myButWithdraw = document.querySelector("#withdraw");
const myButTransfer = document.querySelector("#transfer");
const myLightbox = document.querySelector(".lightbox");
const myLabel = document.querySelector(".adress");
const myInput = document.querySelector(".adress-inp");
const myMoney = document.querySelector(".money");
var myHeader = document.querySelector(".window-header");

function Deposit(){
    myLightbox.style.display="flex";
    myLabel.style.display="none";
    myInput.style.display="none";
    myHeader.innerHTML="DEPOSIT";
}

function Withdraw(){
    myLightbox.style.display="flex";
    myLabel.style.display="none";
    myInput.style.display="none";
    myHeader.innerHTML="WITHDRAW";
}

function Transfer(){
    myLightbox.style.display="flex";
    myLabel.style.display="block";
    myInput.style.display="block";
    myHeader.innerHTML="TRANSFER";
}

function Close(){
    myLightbox.style.display="none";
}

function CloseWithSubmit(){
  
   if(myMoney.value!=0){
        myLightbox.style.display="none";
        myMoney.value="";
}
    
}
function CloseWithSubmitTransfer(){
    if(myHeader.value=="TRANSFER"){
    if(myMoney.value!=0 && myInput.value.length!==0){
    myLightbox.style.display="none";
    myMoney.value="";
    }else{
        myLightbox.style.display="flex";
    }
}
}

myButDeposit.addEventListener("click",Deposit);
myButWithdraw.addEventListener("click",Withdraw);
myButTransfer.addEventListener("click",Transfer);
myButClose.addEventListener("click",Close);
myButSubmit.addEventListener("click",CloseWithSubmit);
myButSubmit.addEventListener("click",CloseWithSubmitTransfer);