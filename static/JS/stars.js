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