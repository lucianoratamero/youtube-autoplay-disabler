var MAX_RETRIES = 20;

function disableAutoplay() {
  disableAutoplayV2();
  disableAutoplayV3();
}

function disableAutoplayV3(retryCount) {
  if (!retryCount) {
    retryCount = 0;
  }

  if (retryCount >= MAX_RETRIES) {
    // probably not in v3 or already disabled
    return;
  }

  var autoplayButton = document.querySelector(
    ".ytp-autonav-toggle-button[aria-checked=true]"
  );

  if (document.readyState !== "complete") {
    // since youtube is loaded dinamically,
    // we need to wait until the element is there.
    // this operation is really cheap,
    // so it shouldn't impact performance/battery.
    return setTimeout(function () {
      disableAutoplayV3();
    }, 5000);
  } else if (autoplayButton) {
    // somehow, on firefox, we need
    // to wait a bit more for the button to be interactive
    return setTimeout(function () {
      autoplayButton.click();
    }, 1500);
  }

  return setTimeout(function () {
    disableAutoplayV3(retryCount + 1);
  }, 500);
}

function disableAutoplayV2(retryCount) {
  if (!retryCount) {
    retryCount = 0;
  }

  if (retryCount >= MAX_RETRIES) {
    // probably not in v2 or already disabled
    return;
  }

  var autoplaySection = document.getElementById("autoplay"),
    autoplayCheckbox = document.getElementById("autoplay-checkbox");

  if (
    document.readyState !== "complete" ||
    !(autoplaySection && autoplayCheckbox)
  ) {
    // since Youtube is loaded dynamically,
    // we need to wait until the element is there.
    // this operation is really cheap,
    // so it shouldn't impact performance/battery.
    return setTimeout(function () {
      disableAutoplayV2(retryCount + 1);
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
