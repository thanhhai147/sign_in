import { mxFirebase } from "./mx";

var firebaseConfig = {
    apiKey: "AIzaSyBOu6ytP1FNaQa4jxSjAGZfBpBy-dU1cxg",
    authDomain: "sign-in-9f4a4.firebaseapp.com",
    databaseURL: "https://sign-in-9f4a4.firebaseio.com",
    projectId: "sign-in-9f4a4",
    storageBucket: "sign-in-9f4a4.appspot.com",
    messagingSenderId: "320926554036",
    appId: "1:320926554036:web:a66b76ff643900130bc4e1",
    measurementId: "G-2W8WJDSSHS"
  };

  mxFirebase = init(firebaseConfig);



var submit_btn = document.getElementById("submit");
submit_btn.addEventListener("submit", async function(a){
    a.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   await mxFirebase.signIn(email, password);
});