
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyA1htuXrDy7mWiTL0Ir9XV-KwR0m9ylDrY",
    authDomain: "portfolio-marwanahmed.firebaseapp.com",
    projectId: "portfolio-marwanahmed",
    storageBucket: "portfolio-marwanahmed.appspot.com",
    messagingSenderId: "587406047720",
    appId: "1:587406047720:web:9df403bbd297616b840c5d",
    measurementId: "G-Q5GHFPB3T2"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

var db = firebase.firestore();

let id = db.collection("HiringMessage").doc().documentId;
const docRef = db.collection("HiringMessage").doc(id);
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#exampleMessage");
const sendButton = document.querySelector("#sendButton");

sendButton.addEventListener("click", function (){
    const nameToSave = name.value;
    const emailToSave = email.value;
    const messageToSave = message.value;
    docRef.set({
        Name: nameToSave,
        email: emailToSave,
        message: messageToSave
    }).then(function (){
        console.log("Message saved!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
});
