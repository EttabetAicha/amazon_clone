const nav = document.getElementById("menu");
const searchIcon = document.getElementById("searchIcon");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const accessoriesList = document.getElementById("accessoriesList");
const clickToShowList = document.getElementById("clickToShowList");

clickToShowList.addEventListener("click", function () {
  if (
    accessoriesList.style.display === "none" ||
    accessoriesList.style.display === ""
  ) {
    accessoriesList.style.display = "block";
  } else {
    accessoriesList.style.display = "none";
  }
});

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    searchIcon.classList.replace("uil-search", "uil-times");
  } else {
    searchIcon.classList.replace("uil-times", "uil-search");
  }
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
