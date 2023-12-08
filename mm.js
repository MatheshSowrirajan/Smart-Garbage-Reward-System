const firebaseConfig = {
  apiKey: "AIzaSyBsnV7-jHTGBCecV1cTNtUoOn3AZqKSWw0",
  authDomain: "project1-b2b81.firebaseapp.com",
  databaseURL: "https://project1-b2b81-default-rtdb.firebaseio.com",
  projectId: "project1-b2b81",
  storageBucket: "project1-b2b81.appspot.com",
  messagingSenderId: "388148214717",
  appId: "1:388148214717:web:4a962437d8cc3dacd070d4"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var DB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name-input");
  var emailid = getElementVal("email-input");
  var phoneno = getElementVal("phone-input");
  var dob= getElementVal("dob-input");
  var address= getElementVal("address-input");
  var aadhar= getElementVal("aadhar-input");

  saveMessages(name, emailid, phoneno,dob,address,aadhar);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phoneno,dob,address,aadhar) => {
  var newContactForm = DB.push();

  newContactForm.set({
    Name: name,
    Emailid: emailid,
    Phoneno: phoneno,
    DOB:dob,
    Address:address,
    Aadharno:aadhar,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};