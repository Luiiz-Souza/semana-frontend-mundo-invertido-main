
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtkPMZjgCbh9N8WUIWEg3CAdy2bInRdjs",
    authDomain: "projeto-front--end.firebaseapp.com",
    projectId: "projeto-front--end",
    storageBucket: "projeto-front--end.appspot.com",
    messagingSenderId: "626563557596",
    appId: "1:626563557596:web:a335e8870bf17021022c19"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app