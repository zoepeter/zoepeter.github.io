// firebase.js
// Exports variable: firebase

function firebaseInit() {
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyCPdEtSwodTo2Kg1LJk06bSmtGeIH1zyLk",
      authDomain: "zoepeter-fab29.firebaseapp.com",
      databaseURL: "https://zoepeter-fab29.firebaseio.com",
      projectId: "zoepeter-fab29",
      storageBucket: "zoepeter-fab29.appspot.com",
      messagingSenderId: "21329665131",
      appId: "1:21329665131:web:84d6180895af345140652e",
      measurementId: "G-5SP8B0650R"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

// end firebase.js
