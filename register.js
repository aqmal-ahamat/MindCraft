console.log("something");


const submitbtn = document.getElementById("submit");
const usernameelement = document.getElementById("username");
const passwordelement = document.getElementById("p");
const confpasswordelement = document.getElementById("confp");
const errorelement = document.getElementById("error");




//------------------------------variables--------------------------------------------------------------------------------------------------------------------------------
let username;
let password;
let confpassword;


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


//------------------------------------------------------------------Input validation------------------------------------------------------
function validate(p, confp, username){
    if (username == ''){
        errorelement.textContent = "Username cannot be empty"
        return false
    }
    else if(p != confp){
        errorelement.textContent = "Passwords do not match"
        return false

    }
    else if (p.length >10 || p.length <= 0){
        errorelement.textContent = "password should be 1-10 characters"
        return false
    }
    
    else {
        errorelement.textContent = ""
        return true
    }

}
//---------------------------------------------------------------------------------database validation----------------------------------------------------------------------------------------------
async function database_validation(uname){
    let usernames_passwords = await getDoc(doc(database, "systemDB", "Users"));
    let usernames_passwords_obj = usernames_passwords.data()
    let usernames = Object.keys(usernames_passwords_obj)
    
    if (usernames.includes(uname)){
        
        errorelement.textContent = "Username already exists. Please login!"
        return false
    }else{
        return true
    }

}

//---------------------------------------------------------------------------------Register User ----------------------------------------------------------------------------------------------
async function registeruser(uname,password){

    try{
        const newDoc = await updateDoc(doc(database,"systemDB","Users"), {
         [uname] : password
         })

        errorelement.textContent = "User successfully registered!"
    }catch(error){
        console.log(error)
    }
}

//---------------------------------------------------------------------------------submit funtion----------------------------------------------------------------------------------------------



function sumbitfunc(){
    username = usernameelement.value;
    password = passwordelement.value;
    confpassword = confpasswordelement.value;

    if (validate(password, confpassword,username)){
        if (database_validation(username)){
           
            registeruser(username,password)


        }

    }

}

submitbtn.onclick = sumbitfunc;

// --------------------------------------------------------------------------------------------------------------------------------------------------





/* ADD A NEW DOCUMENT
try{
    const newDoc = await addDoc(collection(database,"testDoc"), {
        name : "aqmal",
        age : 20
    })
    console.log(newDoc.id);
}
catch(error){

    console.log(error)
}
*/



/* ADD OR EDIT AN EXISTING DOCUMENT
try{
    const newDoc = await setDoc(doc(database,"systemDB","Users"), {
         aqmal: 2004,
         nimasha: 20042004
    })
    
}
catch(error){

    console.log(error)
}*/


/*updating a document 

try{
    const Updated = await updateDoc(doc(database,"systemDB","Users"), {
         aqmal: 20041224
         
    })
    
}
catch(error){

    console.log(error)
}
    */










