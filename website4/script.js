function addMoney() {
    const amount = prompt("Enter amount to add:");

    if (amount && !isNaN(amount) && Number(amount) > 0) {
        const balance = document.getElementById("balance");

        let current = 184560;
        current += Number(amount);

        balance.textContent =
            "₹" + current.toLocaleString("en-IN");

        alert("₹" + Number(amount).toLocaleString("en-IN") +
              " added successfully!");
    }
}

document.getElementById("period").addEventListener("change", function () {
    alert("Showing spending data for: " + this.value);
});

document.querySelectorAll(".bar").forEach(bar => {
    bar.addEventListener("click", function () {
        alert("Spending: ₹" +
            Math.floor(Math.random() * 9000 + 1000).toLocaleString("en-IN"));
    });
});
