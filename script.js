const nav = document.getElementById("menu");
const searchIcon = document.getElementById("searchIcon");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const accessoriesList = document.getElementById("accessoriesList");
const clickToShowList = document.getElementById("clickToShowList");
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('navOpenPanier');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

const overlay = document.getElementById('overlay');

openSidebarBtn.addEventListener('click', () => {
    sidebar.style.right = '0';
    overlay.style.display = 'block';
    document.body.classList.add('blurred');
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.right = '-100%';
    overlay.style.display = 'none';
    document.body.classList.remove('blurred');
});
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
searchIcon.addEventListener("click", () => {
    nav2.classList.toggle("openSearch");
    nav2.classList.remove("openNav");
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
  
