const iconBurger = document.querySelector(".icon-burger");
const navBurger = document.querySelector(".burger");

iconBurger.addEventListener("click", () => {
  console.log(iconBurger);
  navBurger.classList.toggle("show");
});
