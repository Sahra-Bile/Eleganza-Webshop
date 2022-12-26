let menuIcon: HTMLElement = document.getElementById("menu-icon") as HTMLElement;
let hamburgare: HTMLDivElement = document.getElementById(
  "hamburger"
) as HTMLDivElement;
let closeElement: HTMLElement = document.getElementById("close") as HTMLElement;

export function activateMenu(): void {
  menuIcon.addEventListener("click", () => {
    hamburgare.classList.add("block");
  });

  closeElement.addEventListener("click", () => {
    hamburgare.classList.remove("block"); //! display non
  });
}
