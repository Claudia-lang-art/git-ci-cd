const nom = document.querySelector("#nom");
const age = document.querySelector("#age");
const buttonSubmit = document.querySelector("#btn");

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Vous ètes ${nom.value} et vous avez ${age.value}`);
  nom.value = "";
  age.value = "";
});
