console.log("something");

import {initializeApp} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import {collection, addDoc,setDoc,updateDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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









