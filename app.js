const firebaseConfig = {
    apiKey: "AIzaSyD-uSyBMbxS4UjKpAC0NHbECw1zR1ujc00",
    authDomain: "porfolio-1302c.firebaseapp.com",
    projectId: "porfolio-1302c",
    storageBucket: "porfolio-1302c.appspot.com",
    messagingSenderId: "522768499899",
    appId: "1:522768499899:web:ff7a2e18f01d90fd4e959e"
  };

  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  const db = firestore.collection("formData")


  let submitButton = document.getElementById('submit');

  submitButton.addEventListener("click", (e)=>{
    e.preventDefault();

    let firstname = document.getElementById('fname').value
    let lastname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    db.doc().set({
        faname: firstname,
        lname: lastname,
        email: email,
        message: message

    }).then( () => {
        console.log("Data saved")
    }).catch( (error) => {
        console.log(error)
    })

    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""

  });
