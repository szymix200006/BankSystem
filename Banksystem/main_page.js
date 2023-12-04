window.onkeyup = function(e) {
    var event = e.which || e.keyCode || 0; 

    if (event == 27) { 
        window.location.href = 'start_page'; 
    }
}

var overview = document.querySelector("#Overview");
var settings = document.querySelector("#Settings");
var transactions = document.querySelector("#Transactions");
var clickedOverview = false;
var clickedSettings = false;
var clickedTransactions = false;

function changeColorOverview(){
    if(clickedOverview==false){
        overview.style.color = "white";
        settings.style.color = "rgb(166, 158, 175)";
        transactions.style.color = "rgb(166, 158, 175)";
        clickedSettings=false;
        clickedTransactions=false;
        clickedOverview=true;
    }
}

function changeColorSettings(){
    if(clickedSettings==false){
        settings.style.color = "white";
        overview.style.color = "rgb(166, 158, 175)";
        transactions.style.color = "rgb(166, 158, 175)";
        clickedSettings=true;
        clickedTransactions=false;
        clickedOverview=false;
    }
}

function changeColorTransactions(){
    if(clickedTransactions==false){
        transactions.style.color = "white";
        settings.style.color = "rgb(166, 158, 175)";
        overview.style.color = "rgb(166, 158, 175)";
        clickedSettings=false;
        clickedTransactions=true;
        clickedOverview=false;
    }
}

overview.addEventListener("click",changeColorOverview);
settings.addEventListener("click",changeColorSettings);
transactions.addEventListener("click",changeColorTransactions);

