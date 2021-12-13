var listContainer = document.getElementById('countryList');
    const natList = []
    d3.json("sharksModified.json", function(data){  
        for (let i = 0; i < data.length; i++){
            if (!(natList.includes(data[i]["Country"]))){
                (natList.push(data[i]["Country"]))
            }
    }

    natList.sort(function(a, b) {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    
    for (let i = 0; i < natList.length; i++){
        var div = document.createElement('div')
        div.setAttribute("class", "nationality");
        var label = document.createElement("label")
        label.innerHTML = natList[i] + "&nbsp;&nbsp;"           
        var checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute('id', natList[i])
        checkbox.setAttribute("checked", "true")
        checkbox.setAttribute("class", "natCheck")

        label.append(checkbox)
        div.append(label)

        listContainer.append(div)
    }

    var allCheck = document.getElementsByClassName("natCheck")
    for (let i = 0; i < allCheck.length; i++){
        allCheck[i].onclick = function() { refresh()};  
    }
})
