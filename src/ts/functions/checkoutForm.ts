const form: HTMLFormElement = document.getElementById(
  "form"
) as HTMLFormElement;
const firstName: HTMLInputElement = document.getElementById(
  "firstName"
) as HTMLInputElement;

const lastName: HTMLInputElement = document.getElementById(
  "lastName"
) as HTMLInputElement;
const email: HTMLInputElement = document.getElementById(
  "email"
) as HTMLInputElement;

const tel: HTMLInputElement = document.getElementById(
  "phone"
) as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element: any, message: string) => {
  const inputControl: HTMLDivElement = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error") as HTMLDivElement;

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

//* om jag vill komma åt parentElement vilka datatyp ska man ha i variabeln?
const setSuccess = (element: any) => {
  const inputControl: HTMLDivElement = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error") as HTMLDivElement;

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const lastNameValue = lastName.value.trim();
  const yourNumer = tel.innerHTML.trim();

  if (firstNameValue === "") {
    setError(firstName, "firstName is required");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "lastName is required");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (yourNumer === null) {
    setError(tel, "number is required");
  } else if (tel.innerHTML.length < 10) {
    setError(tel, "the length of the number must be 10.");
  } else {
    setSuccess(tel);
  }
};
