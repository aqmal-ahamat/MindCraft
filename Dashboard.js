let username = localStorage.getItem("data")
document.getElementById("usernametxt").textContent = username;

//---------------------------------------------------------------------------Animations-----------------------------------------------------------------------------------------
let introElement = document.getElementById("intro");

introElement.addEventListener("animationend",()=>{
    introElement.style.display = "none";
    document.getElementById("content").style.display = "block";
})


// TODO  - clear the local storage only if the user is navigating to a different page