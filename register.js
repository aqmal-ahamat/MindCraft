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
let isNameValid;


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
    else if (p.length >10 || p.length <= 4){
        errorelement.textContent = "password should be 4-10 characters"
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
        isNameValid = false
    }else{
        
        isNameValid = true
    }

}

//---------------------------------------------------------------------------------Create a new habits document ----------------------------------------------------------------------------------------------

async function CreateHabitsDocument(username) {
    await setDoc(doc(database,"systemDB" ,`${username}Habits`),{

    })
    
}

//---------------------------------------------------------------------------------Create a new XP document----------------------------------------------------------------------------------------------
async function CreateXPDocument(username) {
    await setDoc(doc(database,"systemDB" ,`${username}XP`),{
        "level":1,
        "levelingXP":100
    })
    
}


//---------------------------------------------------------------------------------Register User ----------------------------------------------------------------------------------------------

async function registeruser(uname,password){

        
        const newDoc = await updateDoc(doc(database,"systemDB","Users"), {
         [uname] : password
         })

         
}




//---------------------------------------------------------------------------------submit funtion----------------------------------------------------------------------------------------------



async function submitfunc(){
    username = usernameelement.value;
    password = passwordelement.value;
    confpassword = confpasswordelement.value;

    if (validate(password, confpassword,username)){
        
        await database_validation(username)
        if(isNameValid){
            errorelement.textContent = "User successfully registered!"
            registeruser(username,password)
            CreateHabitsDocument(username);
            CreateXPDocument(username)


        }

    }

}



submitbtn.addEventListener("click", function(event){
    event.preventDefault()
    submitfunc()
})

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










