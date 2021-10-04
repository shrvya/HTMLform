const textError = document.querySelector(".text-error");
text.oninput = function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
};
const emailError=document.querySelector(".email-error")
email.oninput=function(){
    let emailRegex = RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$");
    if (emailRegex.test(email.value)) emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect";
};
const pwdError=document.querySelector(".pwd-error")
pwd.oninput=function(){
    let pwdRegex = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$");
  if (pwdRegex.test(pwd.value)) pwdError.textContent = "";
  else pwdError.textContent = "Enter a valid Password";
}
const telError = document.querySelector(".tel-error");
tel.oninput = function () {
  let telRegex = RegExp("((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6} ");
  if (telRegex.test(tel.value)) telError.textContent = "";
  else telError.textContent = "Mobile No. is Incorrect";
};