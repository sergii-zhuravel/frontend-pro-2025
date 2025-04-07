const categoriesContainer = document.querySelector(".categories-list");
const productsContainer = document.querySelector(".products-list");
const productInfoContainer = document.querySelector("#product-info");

const products = {
  phones: [
    { id: 1, name: "Samsung S55", description: "Test description" },
    { id: 2, name: "Ihone 5", description: "Test iPhone" },
  ],
  laptops: [
    { id: 3, name: "Lenovo", description: "Test Lenovo" },
    { id: 4, name: "Mac", description: "Test Mac" },
    { id: 5, name: "Ipad", description: "Test Ipad" },
  ],
};

/// Categories ///

categoriesContainer.addEventListener("click", function (event) {
  if (!Object.keys(products).includes(event.target.id)) return;

  productsContainer.innerHTML = generateProductsList(event.target.id);

  showElement(productsContainer);
  hideElement(productInfoContainer);
});

function generateProductsList(category) {
  let list = [];
  for (let product of products[category]) {
    list.push(
      `<li data-id="${product.id}" data-category="${category}" onclick="showProductDetails(event)">${product.name}</li>`
    );
  }

  return list.join("\n");
}

function showProductDetails(event) {
  const id = event.target.getAttribute("data-id");
  const category = event.target.getAttribute("data-category");

  const productInfo = products[category].find((product) => product.id == id);

  productInfoContainer.innerHTML = `
    Product details:
    <div>Product name: ${productInfo.name}</div>
    <div>Product description: ${productInfo.description}</div>
  `;

  showElement(productInfoContainer);
}

/// Common functions ///
function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}
