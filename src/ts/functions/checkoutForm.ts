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

let inputControl: HTMLDivElement = document.getElementById(
  "input-control"
) as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

  let buyBtn: HTMLButtonElement = document.getElementById(
    "buyBtn"
  ) as HTMLButtonElement;
  buyBtn.addEventListener("click", () => {
    location.href = "./thankYou.html";
  });
});

const setError = (element: HTMLInputElement, message: string) => {
  inputControl = element.parentElement as HTMLDivElement;
  let errorDisplay = inputControl.getElementsByClassName("error");

  for (let i = 0; i < errorDisplay.length; i++) {
    errorDisplay[i].innerHTML = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  }
};

//* om jag vill komma åt parentElement vilka datatyp ska man ha i variabeln?
const setSuccess = (element: HTMLInputElement) => {
  inputControl = element.parentElement as HTMLDivElement;
  let errorDisplay = inputControl.getElementsByClassName("error");

  for (let i = 0; i < errorDisplay.length; i++) {
    errorDisplay[i].innerHTML = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  }
};

const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue =
    firstName && firstName.value ? firstName.value.trim() : "";
  const emailValue = email && email.value ? email.value.trim() : "";
  const lastNameValue = lastName && lastName.value ? lastName.value.trim() : "";
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
};
