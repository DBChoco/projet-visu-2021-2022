function createResto(container){
    
    d3.json("sharksModified.json", function(data){  
        
        for (let i = 0; i < data.length; i++){
            var newDiv = createRestoDiv()
            addRestoPhoto(newDiv)
            addRestoTitle(newDiv, data[i]["RestoName"], "The best restaurant ever, probably.")
            addRestoStars(newDiv, data[i]["Stars"])
    
            container.append(newDiv)
            
            if (i % 2 == 1){
                newDiv.style.backgroundColor = "#19d438"
            }

            console.log("it's working doc") //very important line. 
        }
    });


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

    function addRestoTitle(newDiv, titleResto, desResto){
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
        newDiv.append(textDiv)
    }

    function addRestoStars(newDiv, number){
        var starsDiv = document.createElement("div")
        starsDiv.setAttribute("class", "starsDiv")
        var stars = document.createTextNode("")
        function createRating(number){
            for (let i = 0; i < 5; i++){
                if (i < number){
                    stars.textContent += "⭐"
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
}

var listContainer = document.getElementById('container__top');
createResto(listContainer)