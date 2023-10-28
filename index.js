var duration;

function loading (){
    duration = setTimeout(showPage, 3000);
}

function showPage (){
    document.getElementById('loader').style.display = 'none'
    document.getElementById('root').style.display = 'block'
}