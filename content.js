
function disableAutoplay(){
  var autoplaySection = document.getElementById('autoplay');

  if (!autoplaySection) {
    // since youtube is loaded dinamically,
    // we need to wait until the element is there.
    return setTimeout(function(){ disableAutoplay(); }, 500);
  }

  var autoplayToggle = autoplaySection.nextElementSibling;

  if (autoplayToggle.getAttribute('aria-pressed') === "true") {
    autoplayToggle.click();
    autoplayToggle.nextElementSibling.click();
  }
}

disableAutoplay();
