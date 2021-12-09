var allResto = document.getElementsByClassName("resto")
var colorSelected = "#1c8639" 
var colorReselected = "#16672c"
var colorUnselected = "#f9f9f9"



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
    colorCorrect()
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

function colorCorrect(){
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

function sortByStars(){
    var button = document.getElementById("stars-sort")
    document.getElementById("price-sort").style.backgroundColor = colorUnselected
    console.log(button.style.backgroundColor)
    if (button.style.backgroundColor == "rgb(28, 134, 57)"){
        sortByStarsDescending()
    }
    else{
        sortByStarsAscending()
    }
    refresh()
}

function sortByPrice(){
    var button = document.getElementById("price-sort")
    document.getElementById("stars-sort").style.backgroundColor = colorUnselected

    console.log(button.style.backgroundColor)
    if (button.style.backgroundColor == "rgb(28, 134, 57)"){
        sortByPriceDescending()
    }
    else{
        sortByPriceAscending()
    }
    refresh()
}

function sortByStarsAscending(){
    var toSort = Array.prototype.slice.call(allResto, 0);
    toSort.sort(function(a, b) {
        return a.getAttribute("data-note") - b.getAttribute("data-note")
    });

    var parent = document.getElementById("container__top")
    parent.innerHTML = "";

    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }

    var button = document.getElementById("stars-sort")
    button.style.backgroundColor = colorSelected
}

function sortByStarsDescending(){
    var toSort = Array.prototype.slice.call(allResto, 0);
    toSort.sort(function(a, b) {
        return b.getAttribute("data-note") - a.getAttribute("data-note")
    });

    var parent = document.getElementById("container__top")
    parent.innerHTML = "";

    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }

    var button = document.getElementById("stars-sort")
    button.style.backgroundColor = colorReselected
}

function sortByPriceAscending(){
    var toSort = Array.prototype.slice.call(allResto, 0);
    toSort.sort(function(a, b) {
        return a.getAttribute("data-price") - b.getAttribute("data-price")
    });

    var parent = document.getElementById("container__top")
    parent.innerHTML = "";

    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }

    var button = document.getElementById("price-sort")
    button.style.backgroundColor = colorSelected
}

function sortByPriceDescending(){
    var toSort = Array.prototype.slice.call(allResto, 0);
    toSort.sort(function(a, b) {
        return b.getAttribute("data-price") - a.getAttribute("data-price")
    });

    var parent = document.getElementById("container__top")
    parent.innerHTML = "";

    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }

    var button = document.getElementById("price-sort")
    button.style.backgroundColor = colorReselected
}