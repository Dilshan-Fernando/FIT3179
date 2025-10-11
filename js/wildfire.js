 var world_map = "js/world_map_fire.vg.json";
 var interactive_map = "js/interactive_visualization.vg.json";
 var week10_map = "js/week10.vg.json";
 var global_temp = "js/global_trend_temperature.vg.json";
 var global_rain = "js/global_trend_rain.vg.json";

 vegaEmbed('#world_map', world_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

 vegaEmbed('#interactive_map', interactive_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#week10', week10_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#global_temp', global_temp).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  vegaEmbed('#global_rain', global_rain).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);