/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
  
  const plusIcon = document.getElementById("plus-icon");
  const xIcon = document.getElementById("x-icon");
  
  if (plusIcon.style.display === "none") {
    plusIcon.style.display = "block";
    xIcon.style.display = "block";
  } else {
    plusIcon.style.display = "none";
    xIcon.style.display = "block";
  }
}

/* When the user clicks a link in the nav bar, load the page using AJAX */
$(document).ready(function(){
  $(".nav-link").click(function(){
    $(".nav-link").removeClass('active-nav-item');
    $(this).toggleClass('active-nav-item');
    if (this.id === "") {
        $("main").load("/about/index.html");
    } else {
    $("main").load("/"+this.id+"/index.html");
  }

/* Once the page has loaded, hide the nav menu (only relevant to smaller screens) */
    document.getElementById("nav").classList.remove("show");
    document.getElementById("menu-btn").classList.remove("rotate")
});
  });

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
