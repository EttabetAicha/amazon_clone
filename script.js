function toggleText(textId) {
    var textDiv = document.getElementById('text' + textId);
    if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block';
    } else {
        textDiv.style.display = 'none';
    }
}
const nav = document.getElementById("menu");
const searchIcon = document.getElementById("searchIcon");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

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
