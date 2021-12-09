function createResto(container){
    
    d3.json("sharksModified.json", function(data){  
        
        for (let i = 0; i < data.length; i++){
            var newDiv = createRestoDiv()
            addRestoPhoto(newDiv)
            addRestoTitle(newDiv, data[i]["RestoName"], "The best restaurant ever, probably.", data[i]["Price"], data[i]["Country"], data[i]["Area"], data[i]["Location"], data[i]["Dangerous"] )
            addRestoStars(newDiv, data[i]["Stars"])

            newDiv.setAttribute("data-fish", data[i]["Fish"])
            newDiv.setAttribute("data-human", data[i]["Human"])
            newDiv.setAttribute("data-note", data[i]["Stars"])
            newDiv.setAttribute("data-danger", data[i]["Danger"])
            newDiv.setAttribute("data-price", data[i]["Price"])
            
            container.append(newDiv)
            
            if (i % 2 == 1){
                newDiv.style.backgroundColor = "#1c8643"
            }
        }
    });
}

var listContainer = document.getElementById('container__top');

makeClick(listContainer)

createResto(listContainer)

function makeClick(listContainer){
    listContainer.onclick = function () {
        location.href = "resto.html";
    };
}

function addBottomText(div, price, country, area, location, danger){
    var bottomTextDiv = document.createElement('div')
    bottomTextDiv.setAttribute("class", "restoBottomTextDiv");

    var bottomText = document.createElement("p")
    bottomText.setAttribute("class", "bottomText")

    addPrice(bottomText, price)
    addSep(bottomText)
    addLocation(bottomText, country, area, location)
    addSep(bottomText)
    addDangerLevel(bottomText, danger)


    function addPrice(bottomText, number){
        var priceText = document.createTextNode("")
        createPrice(priceText, number)
        bottomText.append(priceText)
    }

    function addSep(bottomText){
        var sep= document.createTextNode(" | ")
        bottomText.append(sep)
    }

    function addLocation(bottomText, country, area, location){
        var locText = document.createTextNode("Location: " + country + " - " + area + " - " + location)
        bottomText.append(locText)
    }

    function addDangerLevel(bottomText, danger){
        var dangerText = document.createTextNode("Danger: ")
        if (danger == "true"){
            dangerText.textContent += "High"
        }
        else{
            dangerText.textContent += "Low"
        }
        bottomText.append(dangerText)
    }


    
    bottomTextDiv.append(bottomText)
    div.append(bottomTextDiv)
} 

function createRestoDiv(){
    var newDiv = document.createElement('div')
    newDiv.setAttribute("class", "resto");
    return newDiv
}

function addRestoPhoto(newDiv){
    var photoDiv = document.createElement('div')
    photoDiv.setAttribute("class", "restoPhotoDiv");
    var img = document.createElement("img");
    img.src = "images/krusty_krab.jpg"
    img.setAttribute("class", "restoPhoto")
    photoDiv.append(img)
    newDiv.append(photoDiv)
}

function addRestoTitle(newDiv, titleResto, desResto, price, country, area, location, danger){
    var textDiv = document.createElement('div')
    textDiv.setAttribute("class", "restoTextDiv");
    var title = document.createElement("p")
    title.appendChild(document.createTextNode(titleResto))
    title.setAttribute("class", "restoTitle")

    var description = document.createElement("p")
    description.appendChild(document.createTextNode(desResto))
    description.setAttribute("class", "restoDescription")

    textDiv.append(title)
    textDiv.appendChild(description)
    addBottomText(textDiv, price, country, area, location, danger)
    newDiv.append(textDiv)
}



function addRestoStars(newDiv, number){
    var starsDiv = document.createElement("div")
    starsDiv.setAttribute("class", "starsDiv")
    var stars = document.createTextNode("")
    function createRating(number){
        for (let i = 0; i < 5; i++){
            if (i < number){
                stars.textContent += "🌟 "
            }
            else{
                stars.textContent += " "
            }
        }
    }
    createRating(number)
    starsDiv.append(stars)
    newDiv.append(starsDiv)
}

function createPrice(priceText, number){
    priceText.textContent += "Price: "
    for (let i = 0; i < 4; i++){
        if (i < number){
            priceText.textContent += "💵 "
        }
        else{
            priceText.textContent += " "
        }
    }
}