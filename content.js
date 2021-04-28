function disableAutoplay() {
  disableAutoplayV2();
  disableAutoplayV3();
}

function disableAutoplayV3() {
  var autoplayButton = document.querySelector('[aria-label="Autoplay is on"]');

  if (!autoplayButton) {
    // since youtube is loaded dinamically,
    // we need to wait until the element is there.
    // this operation is really cheap,
    // so it shouldn't impact performance/battery.
    return setTimeout(function () {
      disableAutoplay();
    }, 500);
  }

  autoplayButton.click();
}

function disableAutoplayV2() {
  var autoplaySection = document.getElementById("autoplay"),
    autoplayCheckbox = document.getElementById("autoplay-checkbox");

  if (!autoplaySection && !autoplayCheckbox) {
    // since Youtube is loaded dynamically,
    // we need to wait until the element is there.
    // this operation is really cheap,
    // so it shouldn't impact performance/battery.
    return setTimeout(function () {
      disableAutoplay();
    }, 500);
  }

  if (autoplaySection) {
    var autoplayToggles = document.getElementsByTagName("paper-toggle-button");
    for (var index = 0; index < autoplayToggles.length; index++) {
      var toggle = autoplayToggles[index];
      if (toggle.getAttribute("aria-pressed") === "true") {
        toggle.click();
      }
    }
  } else if (autoplayCheckbox && autoplayCheckbox.checked) {
    autoplayCheckbox.click();
  }
}

disableAutoplay();
