importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCHzd4iZt2ILJ0u75gFSoRe35GV-CrA2ro",
    authDomain: "chaya-8827d.firebaseapp.com",
    databaseURL: "https://chaya-8827d.firebaseio.com",
    projectId: "chaya-8827d",
    storageBucket: "chaya-8827d.appspot.com",
    messagingSenderId: "1077687649658",
    appId: "1:1077687649658:web:3f3146b70fb3bb89ac02c3",
    measurementId: "G-PCEPMNGGTC"

});

const messaging = firebase.messaging();