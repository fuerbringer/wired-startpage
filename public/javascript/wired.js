function isBatteryPowered () {
  return navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery
}

/**
 * Disables CSS scanlines if viewport width <= {threshold}px or battery powered
 */
function disableScanlines (threshold) {
  threshold = (threshold === undefined ? 1080 : threshold)
  if ($(window).width() <= threshold || isBatteryPowered()) {
    $('#overlay, #overlay2').remove()
  }
}

$(document).ready(function () {
  disableScanlines()
})
