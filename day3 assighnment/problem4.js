// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username="xyz@gmail.com";
let stored_password="12345";

let input_username="xz@gmail.com";
let input_password="12345";

if(input_username==stored_username){
  if(input_password==stored_password){
    console.log("Login Successfully");
  }else{
    console.log("Incorrect Password");
  }
}else{
  console.log("Incorrect Username")
}