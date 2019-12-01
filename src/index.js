import {mxFirebase} from "./mx.js"
import "./mx.css";
import "./index.css";
import riot from "riot";
import './tags/homepage.tag';
import "./tags/sign_in.tag";
import route from "riot-route";
route.base("/");
var pathname = "http://localhost:8080/home";
var pathname_2 = "http://localhost:8080/signin";

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

mxFirebase.init(firebaseConfig);

route.start(true);
var sign_in_load = document.getElementsByTagName("body").addEventListener("load", function() {
    window.location.pathname_2;
    route("/signin", () => {
        const sign_in = riot.mount("div#root_sign_in","sign_in");
    });
});



document.getElementById("sign_in_task").addEventListener("submit", async (a) => {
    a.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try{
        await mxFirebase.signIn(email,password);
        console.log("login success");
        window.location.pathname;
        route("/home", () =>{
            const homepage = riot.mount("div#root_homepage", "homepage");
        });     
        route.start(true);
    } catch(err){
        var annoucement = err.message;
        alert(annoucement);
    }
   
});


