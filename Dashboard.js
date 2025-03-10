let username = localStorage.getItem("data")
document.getElementById("usernametxt").textContent = username;// Display the username
let date = new Date();
document.getElementById("todayDate").textContent =  `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`// display the date
// TODO  - clear the local storage only if the user is navigating to a different page


//---------------------------------------------------------------------------Animations-----------------------------------------------------------------------------------------
let introElement = document.getElementById("intro");

introElement.addEventListener("animationend",()=>{
    introElement.style.display = "none";
    document.getElementById("content").style.display = "block";
})


let htracker = document.getElementById("habitTracker");

for (let i=0;i<=30;i++){


    let box = document.createElement("div");
    box.classList.add("checkBox");

    htracker.appendChild(box)

    box.addEventListener("click",function(){
    let currentclass = box.className;
    if(currentclass =="checkBox"){
        box.classList.remove("checkBox")
        box.classList.add("checkBoxClicked")
    }
    else{
        box.classList.remove("checkBoxClicked")
        box.classList.add("checkBox")

    }
    })

}

