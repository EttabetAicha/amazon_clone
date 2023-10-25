const nav = document.getElementById("menu");
const searchIcon = document.getElementById("searchIcon");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const accessoriesList = document.getElementById("accessoriesList");
const clickToShowList = document.getElementById("clickToShowList");
const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("navOpenPanier");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const overlay = document.getElementById("overlay");
const swiperContainerWrapper = document.querySelector(
  ".swiper-container-wrapper"
);
const removepro = document.querySelectorAll(".remove-pro");

const productCounts = {
  1: 1,
  2: 1,
  3: 1,
};
const productPrices = {
  1: 200,
  2: 399,
  3: 300,
};
function updateProduct(product, increment) {
  if (productCounts[product] > 1 || (increment && productCounts[product] < 5)) {
    const countValueElement = document.getElementById(`countValue${product}`);
    const appliedCountElement = document.getElementById(
      `appliedCount${product}`
    );
    if (productCounts[product] === 0 && increment) {
      productCounts[product] = 1;
    } else if (increment) {
      if (productCounts[product] < 5) {
        productCounts[product]++;
      }
    } else {
      productCounts[product]--;
    }
    countValueElement.innerText = productCounts[product];
    const productPrice = productPrices[product];
    const newProductPrice = productCounts[product] * productPrice;
    appliedCountElement.innerText = newProductPrice + "$";
    updateTotalPrice();
  }
}
document.querySelectorAll(".count").forEach((decrementButton) => {
  decrementButton.addEventListener("click", () => {
    const product = decrementButton.getAttribute("data-product");
    updateProduct(product, false);
  });
});
document.querySelectorAll(".count-2").forEach((incrementButton) => {
  incrementButton.addEventListener("click", () => {
    const product = incrementButton.getAttribute("data-product");
    updateProduct(product, true);
  });
});
function updateTotalPrice() {
  const totalElement = document.getElementById("total");
  const total = Object.keys(productCounts).reduce((acc, product) => {
    const productCount = productCounts[product];
    const productPrice = productPrices[product];
    const productTotal = productCount * productPrice;
    return acc + productTotal;
  }, 0);

  totalElement.innerText = total + "$";
}
openSidebarBtn.addEventListener("click", () => {
  sidebar.style.right = "0";
  overlay.style.display = "block";
  document.body.classList.add("blurred");
  swiperContainerWrapper.classList.add("blurred-container");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebar.style.right = "-100%";
  overlay.style.display = "none";
  document.body.classList.remove("blurred");
  swiperContainerWrapper.classList.remove("blurred-container");
});
clickToShowList?.addEventListener("click", function () {
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
removepro.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".pro-item");
    if (product) {
      // Find the product price within the product element
      const productPriceElement = product.querySelector(".pro-price");
      if (productPriceElement) {
        const productPrice = parseFloat(productPriceElement.innerText);

        // Update the total price correctly by subtracting the product price
        const totalElement = document.getElementById("total");
        const currentTotal = Number(totalElement.innerText.replace("$", ""));
        const newTotal = currentTotal - productPrice;

        totalElement.innerText = newTotal.toFixed(2) + "$";

        product.classList.add("removing");
        product.addEventListener("transitionend", () => {
          product.remove();
        });
      }
    }
  });
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const message = document.getElementById("message").value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // /^[a-zA-Z0-9._-]+@gmail+\.(com|ma)$/;
  const nameRegex = /^[a-zA-Z ]{1,30}$/;
  if (fullName.trim() === "") {
    alert("Nom complet est requis");
    return;
  }
  if (!nameRegex.test(fullName)) {
    alert("Nom complet doit contenir au maximum 30 lettres.");
    return;
  }
  if (!email.match(emailRegex)) {
    alert("Adresse email invalide");
    return;
  }
  if (email !== confirmEmail) {
    alert("Les adresses email ne correspondent pas");
    return;
  }
  if (message.trim() === "" || message === "Message") {
    alert("Message est requis");
    return;
  }
  alert("Formulaire soumis avec succès!");
});
