/* Clarins — login (localStorage demo auth, same as before).
   Fixed: the old file crashed when localStorage had no users
   (JSON.parse(null).forEach) and redirected to "../index.html".
   Now: guarded, inline error text, redirect to home.html. */
function login(e) {
  if (e) e.preventDefault();
  var form = document.getElementById("form");
  var err = document.getElementById("login-error");
  if (!form) return;
  var email = form.email ? form.email.value.trim() : "";
  var password = form.password ? form.password.value : "";
  var allUsers = [];
  try { allUsers = JSON.parse(localStorage.getItem("users")) || []; } catch (err2) { allUsers = []; }
  var ok = allUsers.some(function (u) { return u.email === email && u.password === password; });
  if (ok) {
    try { localStorage.setItem("clarins_session", JSON.stringify({ email: email })); } catch (err3) { /* ignore */ }
    if (window.ClarinsApp) window.ClarinsApp.toast("Welcome back!", "bx-smile");
    window.location.href = "home.html";
  } else {
    if (err) err.textContent = "Invalid credentials — please check your email and password.";
    else alert("Invalid credentials");
  }
}
(function () {
  var form = document.getElementById("form");
  if (form) form.addEventListener("submit", login);
})();
