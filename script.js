// heart icon click counts
document.addEventListener("DOMContentLoaded", function () {
  let heartCount = 0;
  const heartIcons = document.querySelectorAll(".heart-btn");
  const heartCounter = document.getElementById("heart-count");

  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      if (!icon.classList.contains("active")) {
        heartCount++;
        icon.classList.add("active");
      } else {
        heartCount--;
        icon.classList.remove("active");
      }

      heartCounter.textContent = heartCount;
    });
  });
});
