function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "navgroup") {
    x.className += " responsive";
  } else {
    x.className = "navgroup";
  }
}
