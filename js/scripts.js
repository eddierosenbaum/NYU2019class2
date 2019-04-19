$('#alertButton').on('click', function() {
  alert('The Reform will take place Fall 2019');
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
center: [6.848748, 48.108150],
zoom: 4.0
});
