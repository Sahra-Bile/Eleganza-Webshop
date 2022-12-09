
let menuIcon:HTMLElement =  document.getElementById("menu-icon") as HTMLElement;
let hamburgare:HTMLDivElement = document.getElementById('hamburger') as HTMLDivElement;
let closeElement: HTMLElement = document.getElementById("close") as HTMLElement;

export function activateMenu() {

  menuIcon.addEventListener("click", () => {
    hamburgare.style.display = "block";
  // hamburgare.classList.toggle("block"); //! styler med sass display block 
  });

  closeElement.addEventListener("click", () => {
    hamburgare.style.display = "none";
    // hamburgare.classList.toggle('none'); //! display none
   
  });
}
// activateMenu();
