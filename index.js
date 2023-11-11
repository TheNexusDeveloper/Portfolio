var duration;

function loading (){
    duration = setTimeout(showPage, 3000);
}

function showPage (){
    document.getElementById('loader').style.display = 'none'
    document.getElementById('root').style.display = 'block'
}

function themeChanger(){
    var element = document.body
    element.classList.toggle("light-mode")
    document.getElementById("light").style.display = 'none'
    document.getElementById("dark").style.display = 'block'
}

// function menuBar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }