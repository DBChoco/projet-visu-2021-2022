function starNumber(numberOfStar){
    for (var i = 0; i < 5; i++){
        if (i < numberOfStar){
            document.write("<i class=\"fa fa-star rating-color\"></i>");
        } else {
            document.write("<i class=\"fa fa-star\"></i>");
        }
     };
}

function starNumberUser(numberOfStar){
    for (var i = 0; i < 5; i++){
        if (i < numberOfStar){
            document.write("<span class=\"fa fa-star checked\"></span>");
        } else {
            document.write("<span class=\"fa fa-star\"></span>");
        }
     };
}

function noticeByStar(priceStar, meatStar, ambianceStar){
    var tab = [priceStar, meatStar, ambianceStar];
    var number1 = 0, number2 = 0, number3 = 0, number4 = 0, number5 = 0;
    for (var i = 0; i < tab.length; i++){
        console.log(tab[i])
        if (tab[i] == 1){
            number1 += 1;
        }else if (tab[i] == 2){
            number2 += 1;
        }else if (tab[i] == 3){
            number3 += 1;
        }else if (tab[i] == 4){
            number4 += 1;
        }else if (tab[i] == 5){
            number5 += 1;
        }
    }
    document.getElementsByClassName("bar-1")[0].style.width = (number1/tab.length)*100+"%";
    document.getElementsByClassName("bar-2")[0].style.width = (number2/tab.length)*100+"%";
    document.getElementsByClassName("bar-3")[0].style.width = (number3/tab.length)*100+"%";
    document.getElementsByClassName("bar-4")[0].style.width = (number4/tab.length)*100+"%";
    document.getElementsByClassName("bar-5")[0].style.width = (number5/tab.length)*100+"%";
    document.getElementById("numberBar-1").innerHTML = number1;
    document.getElementById("numberBar-2").innerHTML = number2;
    document.getElementById("numberBar-3").innerHTML = number3;
    document.getElementById("numberBar-4").innerHTML = number4;
    document.getElementById("numberBar-5").innerHTML = number5;
}