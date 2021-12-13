function createResto(container){
    
    d3.json("sharksModified.json", function(data){  
        
        for (let i = 0; i < data.length; i++){
            var newDiv = createRestoDiv()
            addRestoPhoto(newDiv, data[i]["Picture"])
            addRestoTitle(newDiv, data[i]["RestoName"], data[i]["Description"], data[i]["Price"], data[i]["Country"], 
            data[i]["Area"], data[i]["Location"], data[i]["Dangerous"], data[i]["Gastro"])
            addRestoStars(newDiv, data[i]["Stars"])

            newDiv.setAttribute("id", "resto" + i)
            newDiv.setAttribute("data-name", data[i]["RestoName"])
            newDiv.setAttribute("data-fish", data[i]["Fish"])
            newDiv.setAttribute("data-human", data[i]["Humain"])
            newDiv.setAttribute("data-note", data[i]["Stars"])
            newDiv.setAttribute("data-danger", data[i]["Dangerous"])
            newDiv.setAttribute("data-price", data[i]["Price"])
            newDiv.setAttribute("data-country", data[i]["Country"])
            newDiv.setAttribute("data-area", data[i]["Area"])
            newDiv.setAttribute("data-lat", data[i]["latitude"])
            newDiv.setAttribute("data-lon", data[i]["longitude"])
            newDiv.setAttribute("data-desc", data[i]["Description"])
            newDiv.setAttribute("data-price-star", data[i]["PriceStars"])
            newDiv.setAttribute("data-meat-star", data[i]["MeatQualityStars"])
            newDiv.setAttribute("data-ambiance-star", data[i]["AmbianceStars"])
            newDiv.setAttribute("data-gourmet", data[i]["Gastro"])

            
            container.append(newDiv)
            
            if (i % 2 == 1){
                newDiv.style.backgroundColor = "#1c8643"
            }

            makeClick(newDiv)
        }
    });
}

var listContainer = document.getElementById('container__top');

createResto(listContainer)

function makeClick(resto){
    resto.onclick = function () {
        localStorage.setItem("restoName", resto.getAttribute("data-name"));
        localStorage.setItem("country", resto.getAttribute("data-country"));
        localStorage.setItem("area", resto.getAttribute("data-area"));
        localStorage.setItem("lat", resto.getAttribute("data-lat"));
        localStorage.setItem("long", resto.getAttribute("data-lon"));
        localStorage.setItem("description", resto.getAttribute("data-desc"));
        localStorage.setItem("rateText", resto.getAttribute("data-note"));
        localStorage.setItem("priceStar", resto.getAttribute("data-price-star"));
        localStorage.setItem("meatStar", resto.getAttribute("data-meat-star"));
        localStorage.setItem("ambianceStar", resto.getAttribute("data-ambiance-star"));
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

function addRestoPhoto(newDiv, picture){
    var photoDiv = document.createElement('div')
    photoDiv.setAttribute("class", "restoPhotoDiv");
    var img = document.createElement("img");
    img.src = picture
    img.setAttribute("class", "restoPhoto")
    photoDiv.append(img)
    newDiv.append(photoDiv)
}

function addRestoTitle(newDiv, titleResto, desResto, price, country, area, location, danger, gourmet){
    var textDiv = document.createElement('div')
    textDiv.setAttribute("class", "restoTextDiv");
    var title = document.createElement("p")
    title.appendChild(document.createTextNode(titleResto))
    title.setAttribute("class", "restoTitle")
    if (gourmet == true){
        title.appendChild(document.createTextNode(" | 👨‍🍳"))
        var mouseOver = document.createElement("title")
        mouseOver.innerHTML = "Approved by Philippe Sharkebest"
        title.append(mouseOver)
    }

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