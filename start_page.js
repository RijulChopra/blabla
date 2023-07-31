function pageloader(){
    
    document.getElementById("myImage").style.visibility = "visible";
    document.getElementById("myImage").style.animation = "fly 2s .5s ease-in";
    setTimeout(changepage, 3000); 

}

function changepage(){

    window.location.href = "main_file.html";

}