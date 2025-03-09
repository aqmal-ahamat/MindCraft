let username = localStorage.getItem("data")
localStorage.clear();
document.getElementById("usernametxt").textContent = username;


let introElement = document.getElementById("intro");

introElement.addEventListener("animationend",()=>{
    introElement.style.display = "none";
    document.getElementById("content").style.display = "block";
})
