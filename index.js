const attempt = 3;

function loginSubmit(form) {

 if(form.username.value == "grace" && form.password.value == "123")
  {
    window.open('./users-page.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}