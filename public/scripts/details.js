document.addEventListener("DOMContentLoaded", () => {
    const pizzas = {
        1: {
            name: "Margherita Pizza",
            description: "Classic Margherita pizza with fresh mozzarella, tomatoes, and basil. A timeless favorite.",
            price: "$10.99",
            size: "12-inch",
            calories: "600",
            image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
        },
        2: {
            name: "Pepperoni Pizza",
            description: "Pepperoni pizza loaded with cheese and pepperoni slices. A crowd-pleaser!",
            price: "$12.99",
            size: "14-inch",
            calories: "800",
            image: "https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg"
        },
        3: {
            name: "Mushroom Pizza",
            description: "Mushroom pizza with a creamy garlic sauce and fresh herbs.",
            price: "$14.99",
            size: "16-inch",
            calories: "750",
            image: "https://bakerbynature.com/wp-content/uploads/2015/10/IMG_8442-31-500x375.jpg"
        },
        4: {
            name: "BBQ Chicken Pizza",
            description: "BBQ chicken pizza with tangy barbecue sauce and red onions.",
            price: "$13.99",
            size: "14-inch",
            calories: "850",
            image: "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const pizzaId = urlParams.get("id");
    const pizza = pizzas[pizzaId];

    if (pizza) {
        document.getElementById("product-image").src = pizza.image;
        document.getElementById("product-name").textContent = pizza.name;
        document.getElementById("product-description").textContent = pizza.description;
        document.getElementById("product-price").textContent = pizza.price;
        document.getElementById("product-size").textContent = pizza.size;
        document.getElementById("product-calories").textContent = pizza.calories;
    } else {
        document.querySelector(".product-details").innerHTML = "<p>Product not found.</p>";
    }
});
