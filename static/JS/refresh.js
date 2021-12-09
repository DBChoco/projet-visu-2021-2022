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
    colorCorrect(allResto)
}

function filterValue(restoDiv){
    var noteValue = document.getElementById("noteSlider").value
    var fishValue = document.getElementById("fish").checked
    var priceDivs = document.getElementsByClassName("price-check")
    var dangerValue = document.getElementById("dangerZoneCheck").checked

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

function colorCorrect(allResto){
    var visibleRestos = [];
    for (let i = 0; i < allResto.length; i++){
        if (allResto[i].style.display == "block"){
            visibleRestos.push(allResto[i])
            if (visibleRestos.length % 2 == 0){
                allResto[i].style.backgroundColor = "#1c8643"
            }
            else{
                allResto[i].style.backgroundColor = "#49da89"
            }
        }
    }
}