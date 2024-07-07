const scrollOpt = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("h1", scrollOpt);
ScrollReveal().reveal(".subtitle", {
  ...scrollOpt,
  origin: "top",
  delay: 800,
});

ScrollReveal().reveal(".scroll-t", {
  ...scrollOpt,
  origin: "top",
  delay: 1100,
});
ScrollReveal().reveal(".scroll-b", {
  ...scrollOpt,
  origin: "bottom",
  delay: 1100,
});
ScrollReveal().reveal(".scroll-l", {
  ...scrollOpt,
  origin: "left",
  delay: 1100,
});
ScrollReveal().reveal(".scroll-r", {
  ...scrollOpt,
  origin: "right",
  delay: 1100,
});

function checkLoginStatus() {
  const control = document.getElementById("loginFunc");
  const loggedInUserEmail = localStorage.getItem("loggedInUser");
  if (loggedInUserEmail) {
    const userData = JSON.parse(
      localStorage.getItem("user_" + loggedInUserEmail)
    );
    control.innerHTML = `Welcome ${userData.firstName} !
            <img src='../assets/logout.png' height='30px' id='logout' style='cursor:pointer; margin-left:30px; color:white'>
            `;
    document.getElementById("logout").onclick = logoutUser;
  } else {
    control.innerHTML = `<a href="login.html">Login</a>`;
  }
}
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}

function HandleFind() {
    let arrival = document.getElementById("arrival").value;
    let departure = document.getElementById("departure").value;
    let date = document.getElementById("date").value;
  
    if (arrival == departure) {
      document.getElementById("FromLabel").innerText =
        "Error: Arrival and Departure city cannot be same.";
    } 
    else if(date==""){
      document.getElementById("FromLabel").innerText =
      "Please Enter Valid Date";
    }
    else {
      localStorage.setItem("Arrival_Place", arrival);
      localStorage.setItem("Departure_Place", departure);
      localStorage.setItem("Date", date);
  
      let arrivald = localStorage.getItem("Arrival_Place");
      console.log(arrivald);
     
      window.location.href = "Flight.html";  
    }
  }
  
  