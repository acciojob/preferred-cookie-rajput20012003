//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Function to set cookie with the specified name, value, and expiration
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get cookie value by name
  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  // Function to handle form submission
  document.getElementById("preferencesForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    var fontSize = document.getElementById("fontsize").value;
    var fontColor = document.getElementById("fontcolor").value;

    // Set preferences as cookies with expiration of 1 year
    setCookie("fontSize", fontSize, 365);
    setCookie("fontColor", fontColor, 365);

    // Apply preferences to the page
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });

  // Apply saved preferences on page load
  var savedFontSize = getCookie("fontSize");
  var savedFontColor = getCookie("fontColor");
  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
    document.getElementById("fontsize").value = savedFontSize;
  }
  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

