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

