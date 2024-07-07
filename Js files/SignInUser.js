function handleFormSubmission(e){
    e.preventDefault();
    if(validateForm()){
        storeData()
    }
}
// this function is to store userDetails in local Storage
function storeData(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    
    if(fname==""||lname==""||email=="" ||pass==""){
        document.getElementById("invalid").innerText = " ";
        document.getElementById("invalid").innerText = "All Fields are required!";
    }else{
        let userData={
            firstName:fname,
            lastName:lname, 
            email:email,
            password:pass
        };
        localStorage.setItem('user_'+email,JSON.stringify(userData))  //JSON.stringify convert  userData object into a JSON string 
        console.log("User data stored: ",userData)
        window.location.href = "SignInSuccessful.html";
       
    }  
}

//this function is used to display userdetails in LocalStorage
// function display(){
//     for(let i=0;i<localStorage.length;i++){
//         let key=localStorage.key(i);
//         let value=localStorage.getItem(key)
//         if (value) {
//             try {
//                 let userData = JSON.parse(value);    //JSON.parse convert JSON string (value) back into a JavaScript object (userData).
//                 console.log("User:", userData);
//             } catch (e) {
//                 console.warn(`Skipping key ${key} due to invalid JSON:`, e);
//             }
//         } else {
//             console.warn(`Skipping key ${key} because value is empty`);
//         }
//     }
// }
// display()

//ye vala function sirf understanding ke lie tha...ki input field me kya kya hora h type
function logInputValues() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    
    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Password:", pass);
}

// agar hame onchange use nhi krna input field me, to ham ese kr skte hai
// isme or onchange me ye frak hai, isme ek ek letter change hota hua reflect krega, 
// onchange me user jb focus loose krega input field se, tb dikhaega 

// document.getElementById("fname").addEventListener("input", logInputValues);
// document.getElementById("lname").addEventListener("input", logInputValues);
// document.getElementById("email").addEventListener("input", logInputValues);
// document.getElementById("pass").addEventListener("input", logInputValues);

