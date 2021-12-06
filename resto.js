function createResto(container){
    var newDiv = document.createElement('div')
    newDiv.setAttribute("class", "resto");

    var photoDiv = document.createElement('div')
    photoDiv.setAttribute("class", "restoPhotoDiv");
    var img = document.createElement("img");
    img.src = "images/krusty_krab.jpg"
    img.setAttribute("class", "restoPhoto")
    photoDiv.append(img)
    newDiv.append(photoDiv)

    var textDiv = document.createElement('div')
    textDiv.setAttribute("class", "restoTextDiv");
    var title = document.createElement("p")
    title.appendChild(document.createTextNode("Krusty Krab"))
    title.setAttribute("class", "restoTitle")

    var description = document.createElement("p")
    description.appendChild(document.createTextNode( "The best restaurant ever, probably."))
    description.setAttribute("class", "restoDescription")

    textDiv.append(title)
    textDiv.appendChild(description)
    newDiv.append(textDiv)

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
        console.log(stars)
    }
    createRating(3)
    starsDiv.append(stars)
    newDiv.append(starsDiv)

    container.append(newDiv)
}

var counts = ['1','2','3','4','5','6'];
var listContainer = document.getElementById('container__top');
counts.forEach(function(count) {
    createResto(listContainer)
});