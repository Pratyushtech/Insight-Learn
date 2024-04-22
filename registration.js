
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1QOdagsjmKFrirD-eY5NPvLoPAMLfn14",
    authDomain: "insight-learn.firebaseapp.com",
    projectId: "insight-learn",
    storageBucket: "insight-learn.appspot.com",
    messagingSenderId: "629617734762",
    appId: "1:629617734762:web:980ecee3a2e1d927be0613",
    measurementId: "G-L6LBWEX78F"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
     
            document.write("You are Signed Up")
            console.log(result)
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        
        });
}


const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {

            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}