function refresh(){
    var allResto = document.getElementsByClassName("resto")
    for (i=0; i<allResto.length; i++){
        if (filterValue(allResto[i])){
            allResto[i].style.display = "block"
        }
        else{
            allResto[i].style.display = "none"
        }
    }
}

function filterValue(restoDiv){
    var noteValue = document.getElementById("noteSlider").value
    var fishValue = document.getElementById("fish").checked
    var priceDivs = document.getElementsByClassName("price-check")
    var dangerValue = document.getElementById("dangerZoneCheck").checked

    console.log(restoDiv.getAttribute("data-danger"))


    if (noteValue <= restoDiv.getAttribute("data-note") && 
    ((fishValue && restoDiv.getAttribute("data-fish") == "true") || 
    (!fishValue && restoDiv.getAttribute("data-fish") == "false")) && 
    priceDivs[restoDiv.getAttribute("data-price")-1].checked && 
    (!dangerValue || restoDiv.getAttribute("data-danger") == "false" || (dangerValue && restoDiv.getAttribute("data-danger") == "true"))){
        return true;
    }
    else{
        return false;
    }
}