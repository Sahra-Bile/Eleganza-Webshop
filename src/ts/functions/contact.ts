
let inputName:HTMLInputElement = document.getElementById("name") as HTMLInputElement;

let inputMessage:HTMLTextAreaElement = document.getElementById("message") as HTMLTextAreaElement;

let inputEmail:HTMLInputElement = document.getElementById("email") as HTMLInputElement;

let erroNodes:HTMLFormElement = document.getElementById("error") as HTMLFormElement;

let success:HTMLParagraphElement = document.getElementById("success")as HTMLParagraphElement;

//!* fråga sebastian om vad du gör fel här!!!

let e:SubmitEvent;
function validateForm(){
  e.preventDefault()
  clearMessage();
  
  let errorFlag = false;
if(inputName.value.length < 1){
  erroNodes.innerHTML = "Name cannot be blank"
  inputName.classList.add("error-boder");
  errorFlag = true;
  
}
if(!emailIsValid(inputEmail.value)){
  erroNodes.innerHTML = "invalid email address"
  inputEmail.classList.add("error-boder");

  errorFlag = true;
 
}
if(inputMessage.value.length < 1){
  erroNodes.innerHTML = "Please enter message"
  inputMessage.classList.add("error-boder");
  errorFlag = true;
}
 

if(!errorFlag){
  success.innerHTML = " Message send successfully!";
}
}

//!* rensa error message / success message
function clearMessage(){

  for(let i = 0; i < erroNodes.length; i ++){
  erroNodes.innerHTML = "";
 }
 inputName.classList.remove("error-boder");
 inputEmail.classList.remove("error-boder");
 inputMessage.classList.remove("error-boder");
}

//!* kolla om emailet är giltig 
function emailIsValid(email:string){
  let pettern =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return pettern.test(email);

}

validateForm();