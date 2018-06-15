
function disableAutoplay(){
  var autoplaySection = document.getElementById('autoplay'),
      autoplayCheckbox = document.getElementById('autoplay-checkbox');

  if (!autoplaySection && !autoplayCheckbox) {
    // since youtube is loaded dinamically,
    // we need to wait until the element is there.
    return setTimeout(function(){ disableAutoplay(); }, 500);
  }

  if (autoplaySection) {

    var autoplayToggles = document.getElementsByTagName('paper-toggle-button');
    for (var index = 0; index < autoplayToggles.length; index++) {
      var toggle = autoplayToggles[index];
      if (toggle.getAttribute('aria-pressed') === "true") {
        toggle.click();
      }
    }

  } else if (autoplayCheckbox && autoplayCheckbox.checked) {
    autoplayCheckbox.click();
  }
}

disableAutoplay();
