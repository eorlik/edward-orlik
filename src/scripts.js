/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
  
  const plusIcon = document.getElementById("plus-icon");
  const xIcon = document.getElementById("x-icon");
  
  if (plusIcon.style.display === "none") {
    plusIcon.style.display = "block";
    xIcon.style.display = "none";
  } else {
    plusIcon.style.display = "none";
    xIcon.style.display = "block";
  }
}

/* When the user clicks a link in the nav bar, load the page using AJAX */
$(document).ready(function(){
  $(".nav-link").click(function(e){
    // Prevent the default link behavior
    e.preventDefault();
    
    // Update active nav item styling
    $(".nav-link").removeClass('active-nav-item');
    $(this).toggleClass('active-nav-item');
    
    // Determine the path to load
    let path;
    let urlPath;
    
    if (this.id === "") {
        path = "/about/index.html";
        urlPath = "/about";
    } else {
        path = "/" + this.id + "/index.html";
        urlPath = "/" + this.id;
    }
    
    // Load the content
    $("main").load(path, function() {
      // After content is loaded, update the URL
      history.pushState({page: urlPath}, "", urlPath);
      
      // Update the page title if needed
      document.title = capitalizeFirstLetter(urlPath.substring(1) || "about") + " - Eddie Orlik";
      
      // Hide the nav menu (only relevant to smaller screens)
      document.getElementById("nav").classList.remove("show");
      
      // Reset the menu icon
      const plusIcon = document.getElementById("plus-icon");
      const xIcon = document.getElementById("x-icon");
      plusIcon.style.display = "block";
      xIcon.style.display = "none";
    });
  });
  
  // Handle browser back/forward buttons
  window.onpopstate = function(event) {
    if (event.state) {
      let path = event.state.page;
      if (path === "/about") {
        $("main").load("/about/index.html");
        $(".nav-link").removeClass('active-nav-item');
        $(".nav-link[id='']").addClass('active-nav-item');
      } else {
        let id = path.substring(1); // Remove the leading slash
        $("main").load("/" + id + "/index.html");
        $(".nav-link").removeClass('active-nav-item');
        $(".nav-link[id='" + id + "']").addClass('active-nav-item');
      }
    }
  };
});

// Helper function to capitalize the first letter for the page title
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

  function setThemePreference() {

    function getLatLong(callback) {
      // Get user's Latitude and Longitude through an API call. 
      // getLatLong then calls a callback function, and feeds it the lat and long as arguments.
      var ip = '';
      var XMLHttp = new XMLHttpRequest();
      XMLHttp.onreadystatechange = function(resp) {
        if(this.readyState == 4 && this.status == 200) {
          var ipwhois = JSON.parse(this.responseText);
          // Assign variables to be fed into the callback argument (which will be setTheme)
          callback(ipwhois.latitude, ipwhois.longitude);
        }
      };
      XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
      XMLHttp.send();
    }
    
    /* 
      Set theme based on current time and sunrise/sunset. This function will be called once 
      getLatLong has ascertained the user's location
    */
    
    function setTheme (latitude, longitude) {
      //get sunset/sunrise times based on latitude and longitude
      var times = SunCalc.getTimes(new Date(), latitude, longitude);
      sunrise = times.sunrise.getTime();
      sunset = times.sunset.getTime();
      //get the time now
      var currentTime = new Date().getTime();

      /*
      * The dark theme load early morning and night
      * The light theme load morning and evening
      */

      if( currentTime >= sunset || currentTime <= sunrise) {
        document.body.setAttribute("data-theme", "dark_theme") 
      }else {
        document.body.setAttribute("data-theme", "light_theme") 
      }
  }
  // call getLatLong, which ascertains the user's lat/long, and feed them as arguments into setTheme().
  getLatLong(setTheme);
  }
  
  window.onload = setThemePreference;
