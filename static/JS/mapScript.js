// An API access token is required to use the API. Replace with your own (see how to get an API token in the slides). You can request your own on the Mapbox website
mapboxgl.accessToken = "pk.eyJ1IjoiYW50b2luZWNsYXJpbnZhbCIsImEiOiJja3c1dnNlcmEwMzFlMnFzMm44OHhmZHRqIn0.2mYK_z7Dbh7JYnKkP5077Q";

// A new map is created

const map = new mapboxgl.Map({
            container: "map",   // ID of the element that contains the map
            style: "mapbox://styles/mapbox/satellite-v9",   // Type of map (other styles include basic-v9, streets-v9, dark-v9, satellite-v9 and bright-v9, try them out to see which one is best for your map)
            center: [4.35, 50.85],   // Coordinates of the center of the map [longitude, latitude]
            zoom: 1   // Initial zoom level (1 is the furthest zoom, it shows the whole world)
});
    
// Add zoom and rotation controls to the map

map.addControl(new mapboxgl.NavigationControl({
    position: "top-left"}   // The controls appear at the top left
));

// container is the overlay of the map. The overlay will contain everything we add to the map

const container = map.getCanvasContainer();

// An svg is appended to the container. It will contain the visual elements

const svg = d3.select(container)
    .append("svg")
        .attr("id", "points_container");   // The id of the svg is points_container

d3.json("sharksModified.json", function(data){   // The code in the function is executed only when the data is loaded. All code requiring that the data is fully loaded shoud come here



    console.log(data);   // Always check if the data was correctly loaded!



    //data.filter(function(i,n){
    //  return n.latitude != undefined && n.longitude != undefined ;
    //})

    

    drawRestoPoints(data);

    function drawRestoPoints(points){

        document.getElementById("points_container").innerHTML = "";

        let dots = svg.selectAll(".dot")
            .data(points);

        console.log(dots);

        dots.enter().append("circle")
            .attr("class", "dot")   // The appended circles have the class dot
            .attr("r", 5)   // Radius is 5
            .append("title")   // A title is added to the circles (when the mouse goes over a circle, some text will show)
                .text(function(d){   // Text of the mouseover title
                    return d["Name"];   // The text displayed for a circle is the name of museum it represents
                });

        function render(){

                // Remember that dots is a selection of points. The .attr("cx") and .attr("cy") are executed once for each circle in dots

            dots
                .attr("cx", function(d){   // Setting the x coordinate of the circle center
                    if(d.latitude != undefined && d.longitude != undefined){
                        
                        // 1) Use the Latitude and Longitude to get a point in the Mapbox format (this point has a latitude and longitude)
                        //     ----> new mapboxgl.LngLat(d.Longitude, d.Latitude)
                        // 2) Compute the projection of this point. It has an x and y coordinate in pixels
                        //     ----> map.project(...)
                        // 3) We are setting the x coordinate of the center of the circle -> get the x coordinate of the projection
                        //     ----> map.project(...).x
                        
                    return map.project(new mapboxgl.LngLat(d.longitude, d.latitude)).x;}
                })
                .attr("cy", function(d){   // Setting the y coordinate of the circle center
                    if(d.latitude != undefined && d.longitude != undefined){

                        // 1) Use the Latitude and Longitude to get a point in the Mapbox format (this point has a latitude and longitude)
                        //     ----> new mapboxgl.LngLat(d.Longitude, d.Latitude)
                        // 2) Compute the projection of this point. It has an x and y coordinate in pixels
                        //     ----> map.project(...)
                        // 3) We are setting the y coordinate of the center of the circle -> get the y coordinate of the projection
                        //     ----> map.project(...).y

                    return map.project(new mapboxgl.LngLat(d.longitude,d.latitude)).y;}
                });
            
                
        }

        map.on("viewreset", render);

        // render() is also called when the map is moved (navigation without zoom)

        map.on("move", render);

        // render() is called once for initial placement of the points

        render();

        
    }

});