$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
  });
 
$(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
  });

$( function() {
    $( "#price-range" ).slider({
    range: true,
    min: 0,
    max: 200,
    values: [ 10, 150 ],
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#note-slider" ).slider({
        values: [1],
        min: 1,
        max: 5,
        }
    );
  } );