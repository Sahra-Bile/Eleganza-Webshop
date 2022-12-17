
let menuIcon:HTMLElement =  document.getElementById("menu-icon") as HTMLElement;
let hamburgare:HTMLDivElement = document.getElementById('hamburger') as HTMLDivElement;
let closeElement: HTMLElement = document.getElementById("close") as HTMLElement;

export function activateMenu() :void {

  menuIcon.addEventListener("click", () => {
    hamburgare.classList.add("block");
  // hamburgare.classList.toggle("block"); //! styler med sass display block 
  });
  hamburgare.classList.remove("block");

  closeElement.addEventListener("click", () => {
    // hamburgare.style.display = "none";
    hamburgare.classList.add('none'); //! display non
  });
  hamburgare.classList.remove("none");
}

