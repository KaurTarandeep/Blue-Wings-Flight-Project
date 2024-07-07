
function LoginUser(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if(email=="" ||pass==""){
    document.getElementById("invalid").innerText = " ";
    document.getElementById("invalid").innerText = "Email and Password are required!";
  }
  else{
    let foundUser = false;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if(key.startsWith('user_')){
        let value = localStorage.getItem(key);
        let userData = JSON.parse(value);
    
        if (email == userData.email && pass == userData.password) {
          localStorage.setItem("loggedInUser", email);
          window.location.href = "LogInSucessful.html";
         foundUser=true;
          break;
        } 
      }
      // console.log("key "," ",key)
      // console.log("value "," ",value)
      // console.log("userdata "," ",userData)
      // console.log("userdata password ", userData.password)
    }
    if(!foundUser){
      document.getElementById("invalid").innerText = "Invalid Email and Password!";
      document.getElementById("invalid").style.color = "red";
    }
  }

 
}
