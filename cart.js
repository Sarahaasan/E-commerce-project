document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const lines = document.querySelectorAll(".line");

    function updateProgress(stepNumber) {
        steps.forEach((step, index) => {
            if (index < stepNumber) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });

        lines.forEach((line, index) => {
            if (index < stepNumber - 1) {
                line.style.background = "#007bff";
            } else {
                line.style.background = "#ddd";
            }
        });
    }

    let currentStep = 1;
    setInterval(() => {
        if (currentStep < 4) {
            updateProgress(currentStep);
            currentStep++;
        }
    }, 2000);
});



// document.addEventListener("DOMContentLoaded", function () {
//     // Handle quantity increase and decrease
//     document.querySelectorAll(".cart-item").forEach(item => {
//         const decreaseBtn = item.querySelector(".decrease");
//         const increaseBtn = item.querySelector(".increase");
//         const quantitySpan = item.querySelector(".quantity");
//         const removeBtn = item.querySelector(".remove-item");

//         decreaseBtn.addEventListener("click", function () {
//             let quantity = parseInt(quantitySpan.textContent);
//             if (quantity > 1) {
//                 quantitySpan.textContent = quantity - 1;
//             }
//         });

//         increaseBtn.addEventListener("click", function () {
//             let quantity = parseInt(quantitySpan.textContent);
//             quantitySpan.textContent = quantity + 1;
//         });

//         removeBtn.addEventListener("click", function () {
//             item.remove();
//         });
//     });
// });






// document.addEventListener("DOMContentLoaded", function () {
//     const quantityButtons = document.querySelectorAll(".quantity-control button");
//     const subtotalElement = document.getElementById("subtotal");
//     const totalElement = document.getElementById("total");

//     function updateTotal() {
//         let subtotal = 0;
//         document.querySelectorAll(".cart-item").forEach(item => {
//             const price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
//             const quantity = parseInt(item.querySelector(".quantity").textContent);
//             subtotal += price * quantity;
//         });

//         subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//         const shipping = 7.24;
//         totalElement.textContent = `$${(subtotal + shipping).toFixed(2)}`;
//     }

//     quantityButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const quantitySpan = this.parentElement.querySelector(".quantity");
//             let quantity = parseInt(quantitySpan.textContent);

//             if (this.classList.contains("increase")) {
//                 quantity++;
//             } else if (this.classList.contains("decrease") && quantity > 1) {
//                 quantity--;
//             }

//             quantitySpan.textContent = quantity;
//             updateTotal();
//         });
//     });

//     updateTotal();
// });



// document.querySelector(".checkout-btn").addEventListener("click", function () {
//     const totalAmount = document.getElementById("total").textContent;
//     alert(`Your total is ${totalAmount}. Proceeding to checkout!`);
// });






document.addEventListener("DOMContentLoaded", function () {
    function updateTotal() {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            let price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
            let quantity = parseInt(item.querySelector(".quantity").textContent);
            subtotal += price * quantity;
        });

        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
        let shipping = parseFloat(document.getElementById("shipping").textContent.replace("$", ""));
        let total = subtotal + shipping;
        document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    }

    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElem = this.parentElement.querySelector(".quantity");
            quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
            updateTotal();
        });
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElem = this.parentElement.querySelector(".quantity");
            let currentQuantity = parseInt(quantityElem.textContent);
            if (currentQuantity > 1) {
                quantityElem.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
            updateTotal();
        });
    });

    document.querySelector(".checkout-btn").addEventListener("click", function () {
        let total = document.getElementById("total").textContent;
        alert(`Your total is ${total}. Proceeding to checkout!`);
    });

    updateTotal();
});
