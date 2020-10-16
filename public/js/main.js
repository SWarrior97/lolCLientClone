function verify() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if(username!= "" && password!=""){
        document.getElementById("submitButton").style.border = "none";
        document.getElementById("submitButton").style.color = "white";
        document.getElementById("submitButton").style.backgroundColor = "#d13639";
    }else{
        document.getElementById("submitButton").style.border = "solid";
        document.getElementById("submitButton").style.color = " #e8e8e8";
        document.getElementById("submitButton").style.backgroundColor = "white";
    }
}

function mouseHover (){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if(username!= "" && password!=""){
        document.getElementById("submitButton").style.color = "white";
        document.getElementById("submitButton").style.backgroundColor = "#bc252a";
        document.getElementById("submitButton").style.cursor = "pointer";
    }else{
        document.getElementById("submitButton").style.border = "solid";
        document.getElementById("submitButton").style.color = " #e8e8e8";
        document.getElementById("submitButton").style.backgroundColor = "white";
    }
}

function  mouseLeave(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if(username!= "" && password!=""){
        document.getElementById("submitButton").style.color = "white";
        document.getElementById("submitButton").style.backgroundColor = "#d13639";
        document.getElementById("submitButton").style.cursor = "context-menu";
    }else{
        document.getElementById("submitButton").style.border = "solid";
        document.getElementById("submitButton").style.color = " #e8e8e8";
        document.getElementById("submitButton").style.backgroundColor = "white";
        document.getElementById("submitButton").style.cursor = "context-menu";
    }
}

function mouseLeaveImg (image){
   image.style.cursor = "context-menu";
   image.style.backgroundColor = "white"
}

function  mouseHoverImg(image){
    image.style.cursor = "pointer";
    image.style.backgroundColor = "#f7f7f7"
}