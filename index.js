function check_input() {
   var user = document.getElementById("sub").value;
   if (user == "") {
      document.getElementById("error_message").innerHTML =
         "Please provide a valid email addres!";
   } else {
      document.getElementById("error_message").innerHTML = "Login Successful!";
   }
}
