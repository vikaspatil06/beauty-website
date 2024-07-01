function signup(e) {
            e.preventDefault();
            let myForm = document.getElementById("form");
            let name = myForm.name.value;
            let email = myForm.email.value;
            let password = myForm.password.value;
            let confirmPassword = myForm['confirm-password'].value;

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            let all_users = JSON.parse(localStorage.getItem("users")) || [];

            let userExists = all_users.some(user => user.email === email);

            if (userExists) {
                alert("User with this email already exists");
            } else {
                all_users.push({ name, email, password });
                localStorage.setItem("users", JSON.stringify(all_users));
                alert("Signup successful");
                window.location.href = "login.html";
            }
        }
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});