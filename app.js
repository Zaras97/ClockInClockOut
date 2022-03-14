var password = "12345";


function newPage(){
    if (document.getElementById("floatingPassword").value==password){
        location.replace("timeClock.html");
    }else{
        alert("Incorrect Password!!");
    }
}