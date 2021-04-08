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

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    )
  }
})

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9
  } else {
    document.querySelector('#navbar').style.opacity = 1
  }
})
