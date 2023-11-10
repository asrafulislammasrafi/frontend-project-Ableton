const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector(".dropdownMenu");
// Add event listener to the dropdown button
dropdownBtn.addEventListener("click", function () {
  // Toggle the "active" class on the dropdown menu
  dropdownMenu.classList.toggle("active");

  // Check if the dropdown menu has the "active" class
  if (dropdownMenu.classList.contains("active")) {
    // Update the inner HTML of the dropdown button
    dropdownBtn.innerHTML = "More -";
  } else {
    dropdownBtn.innerHTML = "More +";
  }
});
