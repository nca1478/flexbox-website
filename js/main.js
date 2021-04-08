// Initialize and add the map
function initMap() {
  // The location
  const loc = { lat: 8.03418, lng: -72.25274 }
  // The map, centered
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 10,
    center: loc
  })
  // The marker, positioned
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  })
}
