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



    container.append(newDiv)
}

var counts = ['1','2','3','4'];
var listContainer = document.getElementById('container__top');
counts.forEach(function(count) {
    createResto(listContainer)
});