/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
  document.getElementById("menu-btn").classList.toggle("rotate")
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
    // Get hour of the day
    var h = new Date().getHours();

    /*
    * The dark theme load early morning and night
    * The light theme load morning and evening
    */
  
    if(currentHour >= 19 || currentHour <= 6) {
      document.body.setAttribute("data-theme", "dark_theme") 
    }else {
      document.body.setAttribute("data-theme", "light_theme") 
    }
  }
  
  window.onload = setThemePreference;