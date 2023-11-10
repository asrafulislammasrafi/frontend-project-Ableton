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

const smNav = document.querySelector(".smNav");
const activeNav = document.querySelector(".activeNav");

smNav.addEventListener("click", function () {
  // Toggle the "active" class on the dropdown menu
  smNav.classList.toggle("active");

  // Check if the dropdown menu has the "active" class
  if (smNav.classList.contains("active")) {
    // Update the inner HTML of the dropdown button
    smNav.innerHTML = "More 🔺";
    activeNav.style.display = "block";
    document.querySelector("header").style.background = "#0000ff";
    document.querySelector("header").classList.add("active");
  } else {
    smNav.innerHTML = "More 🔻";
    activeNav.style.display = "none";
    document.querySelector("header").style.background = "#fff";
    document.querySelector("header").classList.remove("active");
  }
});

// function add activeNav display block if window width lower then 1260px

window.addEventListener("resize", function () {
  if (window.innerWidth < 1260) {
    activeNav.style.display = "none";
  } else {
    activeNav.style.display = "block";
  }
});
