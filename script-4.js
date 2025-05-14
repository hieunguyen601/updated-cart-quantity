let cartQuantity = 0;

function updateCartQuantity(quantity) {
    if (cartQuantity > 10) {
        alert('The cart is full.');
    } else {
        console.log(cartQuantity += quantity);
    }
}

function removeCartQuantity(remove_quantity) {
    if (cartQuantity < 0) {
        alert('The cart is empty');
    } else {
        console.log(cartQuantity -= remove_quantity);
    }
}