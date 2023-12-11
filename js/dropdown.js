document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const barIcon = document.querySelector(".bar__icon");
  const dropdownMenu = document.querySelector(".dropdown__menu");
  const barImg = document.querySelector(".bar__img");
  const crossImg = document.querySelector(".cross__img");

  // crossImg.style.display = 'none';

  // Add a click event listener to the bar icon
  barIcon.addEventListener("click", function () {
    // Toggle the 'open' class on the dropdown menu
    dropdownMenu.classList.toggle("open");

    // Change the visibility of the images based on the dropdown state
    if (dropdownMenu.classList.contains("open")) {
      barImg.style.display = "none";
      crossImg.style.display = "inline-block";
    } else {
      barImg.style.display = "inline-block";
      crossImg.style.display = "none";
    }
  });
});
