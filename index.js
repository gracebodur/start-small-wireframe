function registerSubmit() {
  const fullName = document.getElementById('register_fullname').value
  const registerUsername = document.getElementById('register_username').value
  const registerPassword = document.getElementById('register_password').value

  if (!fullName) {
    alert("Full name is required")
    return false;
  }
  if (!registerUsername) {
    alert("Username is required")
    return false;
  }
  if (!registerPassword) {
    alert("Password is required")
    return false;
  }
  else {
    window.open('./users-page.html')
    return true
  }
}

function loginSubmit() {
  const username = document.getElementById('username').value
  const password = document.getElementById('login_password').value

 if(username == "grace" && password == "123") {
    window.open('./users-page.html')
    return false
  }
 else
 {
   alert('Username or password is incorrect')
   return false
  }
}

function usersLogout() {
  window.location.href="./index.html";
}
