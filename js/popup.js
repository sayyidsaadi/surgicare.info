let popupShow = document.querySelector(".sadi_trial");
let popupBox = document.querySelector(".admit-popup");
let hideBox = document.getElementById("hideBox");
popupShow.onclick = () => {
  popupBox.style.display = "block";
};
hideBox.onclick = () => {
  popupBox.style.display = "none";
};
