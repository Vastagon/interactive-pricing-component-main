let sliderNumber = document.querySelector('#slider');
let moneyPerMonth = document.querySelector('#moneyPerMonth');
let monthlySwitch = document.querySelector('#monthlySwitch');
let pageviews = document.querySelector('#pageviews')
let progressBar = document.querySelector('#progressBar')

let sliderNum = sliderNumber.value;
let shownNum = 16.00;
let monthly = true;
let viewsPerPage = 100;
progressBar.style.width = 40 + "%";

console.log(sliderNum);

sliderNumber.addEventListener('input', function(){
    progressBar.style.width = ((this.value-1)*20) + "%";
    console.log(this.value);
    checkNum()
});


monthlySwitch.addEventListener('click', function(){
    checkMonthly();
    checkNum()
});


function checkMonthly(){
    if(monthly){
        monthly = false;
    }else{
        monthly = true;
    }
    console.log(monthly)
}

function checkNum(){
    sliderNum = sliderNumber.value;

    if(monthly){
       if(sliderNum == 1){
            shownNum = 8.00;
            viewsPerPage = 10;
        } 
        if(sliderNum == 2){
            shownNum = 12.00;
            viewsPerPage = 50;
        }
        if(sliderNum == 3){
            shownNum = 16.00;
            viewsPerPage = 100;
        }
        if(sliderNum == 4){
            shownNum = 24.00;
            viewsPerPage = 500;

        }
        if(sliderNum == 5){
            shownNum = 36.00;
            viewsPerPage = 1;
        }
    }else{
        if(sliderNum == 1){
            shownNum = 6.00;
            viewsPerPage = 10;
        } 
        if(sliderNum == 2){
            shownNum = 9.00;
            viewsPerPage = 50;
        }
         if(sliderNum == 3){
            shownNum = 12.00;
            viewsPerPage = 100;
        }
        if(sliderNum == 4){
            shownNum = 18.00;
            viewsPerPage = 500;
        }
        if(sliderNum == 5){
            shownNum = 27.00;
            viewsPerPage = 1;
        }
    }

    moneyPerMonth.textContent = "$" + shownNum.toFixed(2);
    if(viewsPerPage == 1){
            pageviews.textContent = viewsPerPage + "M PAGEVIEWS"
    }else{
            pageviews.textContent = viewsPerPage + "K PAGEVIEWS"

    }
}


