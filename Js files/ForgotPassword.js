function handleFormSubmission(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pass1 = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass1").value;

  if (email == "" || pass1 == "" || pass2 == "") {
    document.getElementById("ver").innerText = " ";
    document.getElementById("ver").innerText =
      "Email and Password are required!";
  } else {
    if (validateForm()) {
      UpdatePassword();
    }
  }
}

function UpdatePassword() {
  let email = document.getElementById("email").value;
  let pass1 = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass1").value;

  document.getElementById("ver").innerText = "";
  if (pass1 !== pass2) {
    document.getElementById("ver").innerText = "Please Enter Same Password";
    return;
  }
  let userData = localStorage.getItem("user_" + email);
  console.log("userData: ", userData);

  if (userData) {
    let user = JSON.parse(userData);
    console.log("user: ", user);
    console.log("user.password: ", user.password);
    user.password = pass1;
    localStorage.setItem("user_" + email, JSON.stringify(user));
    console.log("JSON Stringify: ", JSON.stringify(user));
    document.getElementById("ver").innerHTML =
      'Password updated successfully! <a href="login.html"> Go to Login Page </a>';
  } else {
    document.getElementById("ver").innerText = "Email doesn't exist";
  }
}
