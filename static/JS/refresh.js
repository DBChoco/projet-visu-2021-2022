function refreshFish(){
    var allResto = document.getElementsByClassName("resto")
    var fishValue = document.getElementById("fish").checked
    for (i=0; i<allResto.length; i++){
        if (filterValue(allResto[i])){
            allResto[i].style.display = "block"
        }
        else{
            allResto[i].style.display = "none"
        }
    }
}

function refreshHuman(){
    var allResto = document.getElementsByClassName("resto")
    var fishValue = document.getElementById("human").checked
    for (i=0; i<allResto.length; i++){
        if (filterValue(allResto[i])){
            allResto[i].style.display = "block"
        }
        else{
            allResto[i].style.display = "none"
        }
    }
}

function refreshNote(){
    var allResto = document.getElementsByClassName("resto")
    var noteValue = document.getElementById("noteSlider").value
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
    if (noteValue <= restoDiv.getAttribute("data-note") && 
    ((fishValue && restoDiv.getAttribute("data-fish") == "true") || 
    (!fishValue && restoDiv.getAttribute("data-fish") == "false"))){
        return true;
    }
    else{
        return false;
    }
}