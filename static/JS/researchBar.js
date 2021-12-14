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

function makeResearch(){

    var isInList = false
    var allResto = document.getElementsByClassName("resto")
    var a = document.getElementById("searchtext").value
    for (var i = 0; i< allResto.length; i++){
        if(allResto[i].getAttribute("data-name")!=a){
            allResto[i].style.display = "none"
            }
    	else{
    		allResto[i].style.display = "block"
    		var isInList = true;}
	}
	if(!isInList){
		alert("Restaurant not found")
	}
	else{
		colorCorrect()
	}
}

function pressEnter(event) {
    var code=event.which || event.keyCode; //Selon le navigateur c'est which ou keyCode
    if (code==13) { //le code de la touche Enter
        makeResearch()
        colorCorrect()
        return false
    }
    //return false;
}