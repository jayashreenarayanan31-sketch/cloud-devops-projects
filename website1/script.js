let cart = [];

let cartTotal = 0;


// ADD TO CART

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    cartTotal += price;

    updateCart();

    alert(name + " added to cart!");

}


// UPDATE CART

function updateCart() {

    document.getElementById("cart-count").innerText =
        cart.length;

    document.getElementById("cartTotal").innerText =
        "₹" + cartTotal.toLocaleString("en-IN");


    const items =
        document.getElementById("cartItems");

    items.innerHTML = "";


    cart.forEach(function(item) {

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML =
            `<strong>${item.name}</strong>
             <br>
             ₹${item.price.toLocaleString("en-IN")}`;

        items.appendChild(div);

    });

}


// OPEN CART

function openCart() {

    document.getElementById("cartModal")
        .style.display = "block";

}


// CLOSE CART

function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";

}


// SEARCH

function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const name =
            product.dataset.name.toLowerCase();

        const category =
            product.dataset.category.toLowerCase();


        if (
            name.includes(search) ||
            category.includes(search)
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// CATEGORY FILTER

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        if (
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// SHOW ALL

function showAllProducts() {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        product.style.display = "block";

    });

}


// SCROLL

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// SEARCH BUTTON

function focusSearch() {

    document.getElementById("searchInput")
        .focus();

}

