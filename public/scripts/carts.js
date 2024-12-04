document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector("#cart-items");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const deliveryFeeEl = document.getElementById("delivery-fee");
    const totalEl = document.getElementById("total");

    const TAX_RATE = 0.0675;
    const DELIVERY_FEE = 5.00;

    function updateCart() {
        let subtotal = 0;

        document.querySelectorAll(".cart-item").forEach((item) => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector(".item-quantity").value, 10);
            const total = price * quantity;

            item.querySelector(".cart-item-total").textContent = `Total: $${total.toFixed(2)}`;
            subtotal += total;
        });

        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax + DELIVERY_FEE;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxEl.textContent = `$${tax.toFixed(2)}`;
        deliveryFeeEl.textContent = `$${DELIVERY_FEE.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }

    cartItems.addEventListener("input", (event) => {
        if (event.target.classList.contains("item-quantity")) {
            updateCart();
        }
    });

    cartItems.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-btn")) {
            const item = event.target.closest(".cart-item");
            item.remove();
            updateCart();
        }
    });

    updateCart(); // Initialize totals on page load
});
