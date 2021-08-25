function myFunction() {
  let x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "navgroup") {
    x.className += " responsive";
  } else {
    x.className = "navgroup";
  }
}
