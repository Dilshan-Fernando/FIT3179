 var world_map = "js/world_map_fire.vg.json";

 vegaEmbed('#world_map', world_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);