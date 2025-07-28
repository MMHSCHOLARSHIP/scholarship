// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqOK_UFWxPzjxJgwUL9yQmj9UHEOGwFVk",
  authDomain: "scholarship-submission-93dec.firebaseapp.com",
  projectId: "scholarship-submission-93dec",
  storageBucket: "scholarship-submission-93dec.firebasestorage.app",
  messagingSenderId: "609737347803",
  appId: "1:609737347803:web:16e9007b7b55946ff2b2fe",
  measurementId: "G-FVJ1XVWY5E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

window.registerUser = function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const scholarNo = document.getElementById("scholarNo").value;
  const dob = document.getElementById("dob").value;
  const studentClass = document.getElementById("class").value;
  const year = document.getElementById("year").value;
  const password = document.getElementById("password").value;

  const userData = {
    name,
    dob,
    class: studentClass,
    year,
    password
  };

  set(ref(database, "students/" + scholarNo), userData)
    .then(() => {
      localStorage.setItem(scholarNo, JSON.stringify(userData));
      alert("Registration successful!");
      window.location.href = "index.html";
    })
    .catch((error) => alert("Error: " + error.message));
};

window.loginUser = function(event) {
  event.preventDefault();
  const scholarNo = document.getElementById("loginScholarNo").value;
  const password = document.getElementById("loginPassword").value;

  const stored = localStorage.getItem(scholarNo);
  if (!stored) return alert("User not found");

  const user = JSON.parse(stored);
  if (user.password === password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect password.");
  }
};
