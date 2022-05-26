$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  var myhref1 = document.getElementById("a1");
  var myhref2 = document.getElementById("a2");
  var myhref3 = document.getElementById("a3");
  var myhref4 = document.getElementById("a4");
  var myhref6 = document.getElementById("a6");
  var myfield = document.getElementById("check");
  
  myfield.addEventListener("click", function() {
    document.getElementById("home").scrollIntoView();
  });
  
  
  myhref1.addEventListener("click", function() {
    myfield.checked = false;
  });
  
  myhref2.addEventListener("click", function() {
    myfield.checked = false;
  });
  
  myhref3.addEventListener("click", function() {
    myfield.checked = false;
  });
  
  myhref4.addEventListener("click", function() {
    myfield.checked = false;
  });
  
  myhref6.addEventListener("click", function() {
    myfield.checked = false;
  });