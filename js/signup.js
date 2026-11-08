/* Clarins — sign up (localStorage demo auth, same as before).
   Keeps: password-match check, duplicate-email check,
   signup -> login.html. Fixed: inline error text instead of
   alert-only, and no unguarded dark-mode / sidebar code here
   (that now lives guarded in js/app.js). */
function signup(e) {
  if (e) e.preventDefault();
  var form = document.getElementById("form");
  var err = document.getElementById("signup-error");
  if (!form) return;
  var name = form.name ? form.name.value.trim() : "";
  var email = form.email ? form.email.value.trim() : "";
  var password = form.password ? form.password.value : "";
  var confirmPassword = form["confirm-password"] ? form["confirm-password"].value : "";
  function fail(msg) {
    if (err) err.textContent = msg;
    else alert(msg);
  }
  if (password !== confirmPassword) { fail("Passwords do not match."); return; }
  if (password.length < 4) { fail("Password must be at least 4 characters."); return; }
  var allUsers = [];
  try { allUsers = JSON.parse(localStorage.getItem("users")) || []; } catch (err2) { allUsers = []; }
  if (allUsers.some(function (u) { return u.email === email; })) {
    fail("An account with this email already exists — please sign in instead.");
    return;
  }
  allUsers.push({ name: name, email: email, password: password });
  try { localStorage.setItem("users", JSON.stringify(allUsers)); } catch (err3) { /* ignore */ }
  if (err) err.textContent = "";
  if (window.ClarinsApp) window.ClarinsApp.toast("Account created — please sign in", "bx-check-circle");
  window.location.href = "login.html";
}
(function () {
  var form = document.getElementById("form");
  if (form) form.addEventListener("submit", signup);
})();
