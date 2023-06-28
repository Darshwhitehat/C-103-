var firebaseConfig = {
    apiKey: "AIzaSyDkEC-vO1MUPwZWhsGoxshX00qxwkQ2coI",
    authDomain: "chat-d6d8d.firebaseapp.com",
    databaseURL: "https://chat-d6d8d-default-rtdb.firebaseio.com",
    projectId: "chat-d6d8d",
    storageBucket: "chat-d6d8d.appspot.com",
    messagingSenderId: "309636931435",
    appId: "1:309636931435:web:08f27cd81f54a6bf2af62e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message : msg,
        like:0    
       });
       document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();