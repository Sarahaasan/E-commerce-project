
document.addEventListener("DOMContentLoaded", () => {
    setupContactButtons();
    setupFormValidation();
});

document.getElementById("categories").addEventListener("change", function () {
    let selectedValue = this.value;
    alert("You selected: " + selectedValue);
});


 document.getElementById("homeBtn").addEventListener("click", function () {
        window.location.href = "index.html"; 
 });
    
  function showCategory(category) {
            alert("You clicked on " + category);
}
        
const products = [
    {
        image: "/images/products.png",
        name: "Stylish Jacket",
        category: "Little man",
        price: "$118.99",
        rating: 4.8
    },
    {
        image: "/images/pngwing.com (57) 1.png",
        name: "Beats Headphones",
        category: "Electronics",
        price: "$199.99",
        rating: 4.7
    },
    {
        image: "/images/products (1).png",
        name: "Nike Air Jordan",
        category: "Footwear",
        price: "$150.00",
        rating: 4.9
    },
    {
        image: "/images/pngwing.com (51) 1.png",
        name: "Nike Running Shoes",
        category: "Footwear",
        price: "$120.50",
        rating: 4.6
    },
    {
        image: "/images/products (2).png",
        name: "Nike Dunk Low",
        category: "Footwear",
        price: "$130.99",
        rating: 4.8
    }
];

const productContainer = document.getElementById("productContainer");

function loadProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="wishlist"><i class="fa-regular fa-heart"></i></div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <span class="price">${product.price}</span>
            <div class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
            <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", loadProducts);

function seeAllProducts() {
    alert("Navigating to all products...");
    window.location.href = "all-products.html";
}


