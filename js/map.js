document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".map-circle");

  circles.forEach((circle) => {
    circle.addEventListener("mouseover", function () {
      const tooltip = this.nextElementSibling;
      tooltip.style.top = `${this.offsetTop - 30}px`; // Adjust the offset as needed
      tooltip.style.left = `${this.offsetLeft}px`;
    });

    circle.addEventListener("mouseout", function () {
      const tooltip = this.nextElementSibling;
      tooltip.style.display = "none";
    });
  });
});
