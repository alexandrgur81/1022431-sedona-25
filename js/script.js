var link = document.querySelector(".appointment-search-btn");
var popup = document.querySelector(".appointment-form");

link.addEventListener("click", function (evt) {
  popup.classList.toggle("appointment-form-show");
});
