function openUpdate(evt, releaseMonth) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(releaseMonth).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//Responsiveness

var modal = document.getElementById("mySidenav");
const mediaQuery = window.matchMedia("(max-width: 600px)");
function openNav() {
  if(modal.style.width === "50%") {
  modal.style.width = "0";
  document.getElementById('bar').className = "fa fa-bars"
  } else if(mediaQuery.matches) {
    modal.style.width = "50%";
  document.getElementById('bar').className = "fa fa-times"
  } else {
  modal.style.width = "30%";
  document.getElementById('bar').className = "fa fa-times"
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.width = "0";
    document.getElementById('bar').className = "fa fa-bars"
  }
}
