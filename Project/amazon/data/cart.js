export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = []
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    })

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        })
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    cart = cart.filter(cartItem => cartItem.productId !== productId);

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    const matchingItem = cart.find(cartItem => cartItem.productId === productId);

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();

}