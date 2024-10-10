document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has accepted cookies before
    if (localStorage.getItem("cookiesAccepted") !== "true") {
      // Show the cookie popup if not accepted
      document.getElementById("cookie-popup").style.display = "block";
     
    }else {
      addGtag();
    }

     if(sessionStorage.getItem("cookiesRejected") == "true"){
      document.getElementById("cookie-popup").style.display = "none";
      
    }

    
  });
  
  function acceptCookies() {
    // Set a flag in local storage to remember that the user has accepted cookies
    localStorage.setItem("cookiesAccepted", "true");
  
    // Hide the cookie popup
    document.getElementById("cookie-popup").style.display = "none";

    addGtag();
    

  }

  function closePopup() {
    // Hide the cookie popup without storing in local storage
    sessionStorage.setItem("cookiesRejected", "true");
    document.getElementById("cookie-popup").style.display = "none";
  }

  function addGtag(){
    var addGoogleAnalytics = document.createElement("script");
    addGoogleAnalytics.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-Q7JQV3RHL9");
    addGoogleAnalytics.async = "true";
    document.head.appendChild(addGoogleAnalytics);

    var addDataLayer = document.createElement("script");
    var dataLayerData = document.createTextNode("window.dataLayer = window.dataLayer || []; \n function gtag(){dataLayer.push(arguments);} \n gtag('js', new Date()); \n gtag('config', 'G-Q7JQV3RHL9');");
    addDataLayer.appendChild(dataLayerData);
    document.head.appendChild(addDataLayer);
  }