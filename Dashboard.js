let username = localStorage.getItem("data")
document.getElementById("usernametxt").textContent = username;// Display the username
let date = new Date();
document.getElementById("todayDate").textContent =  `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`// display the date
// TODO  - clear the local storage only if the user is navigating to a different page

// -----------------------------------------------setting up firebase ---------------------------------------------------------------------------------------------------

import {initializeApp} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import {collection, addDoc,setDoc,updateDoc,getDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseApp = initializeApp(
    {
        apiKey: "AIzaSyCbvr4YccmUux0Ix4-hJeeBLrdEJrDDP9A",
        authDomain: "the-system-f130c.firebaseapp.com",
        projectId: "the-system-f130c",
        storageBucket: "the-system-f130c.firebasestorage.app",
        messagingSenderId: "357675422438",
        appId: "1:357675422438:web:a18df6c2431ff8a204a127",
        measurementId: "G-Q38KDQLEV8"
    }
)

const database = getFirestore(firebaseApp);

function saveRecord(){
    
}

//---------------------------------------------------------------------------Animations-----------------------------------------------------------------------------------------
let introElement = document.getElementById("intro");

introElement.addEventListener("animationend",()=>{
    introElement.style.display = "none";
    document.getElementById("content").style.display = "block";
})


let htracker = document.getElementById("habitTracker");

for (let i=0;i<=30;i++){// instead of hard coding , use number of days of the month


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


