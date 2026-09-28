let cart = [];

let total = 0;


// ADD FOOD

function addFood(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    alert(name + " added to your order!");

}


// UPDATE CART

function updateCart() {

    document.getElementById("cart-count").innerText =
        cart.length;


    document.getElementById("cartTotal").innerText =
        "₹" + total.toLocaleString("en-IN");


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


// SEARCH RESTAURANTS

function searchRestaurants() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const restaurants =
        document.querySelectorAll(".restaurant-card");


    restaurants.forEach(function(restaurant) {

        const name =
            restaurant.dataset.name.toLowerCase();

        const category =
            restaurant.dataset.category.toLowerCase();


        if (
            name.includes(search) ||
            category.includes(search)
        ) {

            restaurant.style.display = "block";

        } else {

            restaurant.style.display = "none";

        }

    });

}


// CATEGORY FILTER

function filterCategory(category) {

    const restaurants =
        document.querySelectorAll(".restaurant-card");


    restaurants.forEach(function(restaurant) {

        if (
            restaurant.dataset.category === category
        ) {

            restaurant.style.display = "block";

        } else {

            restaurant.style.display = "none";

        }

    });


    document.getElementById("restaurants")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// SHOW ALL

function showAllRestaurants() {

    const restaurants =
        document.querySelectorAll(".restaurant-card");


    restaurants.forEach(function(restaurant) {

        restaurant.style.display = "block";

    });

}


// SCROLL

function scrollToRestaurants() {

    document.getElementById("restaurants")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ORDERS

function showOrders() {

    alert(
        "No recent orders. Start exploring restaurants!"
    );

}
