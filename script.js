const products = [
    { id: 1, name: 'RTX 4090 Graphics Card', price: 1599, icon: '🎮' },
    { id: 2, name: 'Ryzen 9 7950X Processor', price: 699, icon: '⚡' },
    { id: 3, name: 'RGB Gaming Keyboard', price: 149, icon: '⌨️' },
    { id: 4, name: 'Ultrawide Monitor 34"', price: 899, icon: '🖥️' },
    { id: 5, name: '32GB DDR5 RAM Kit', price: 299, icon: '💾' },
    { id: 6, name: 'Gaming Mouse Pro', price: 79, icon: '🖱️' },
    { id: 7, name: '2TB NVMe SSD', price: 179, icon: '💿' },
    { id: 8, name: 'Mechanical Numpad', price: 49, icon: '🔢' },
    { id: 9, name: 'Wireless Headset RGB', price: 199, icon: '🎧' }
];

let cart = [];

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-img">${product.icon}</div>
            <div class="product-title">${product.name}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    showNotification();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty! Start shopping! 🛍️');
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const items = cart.map(item => `${item.icon} ${item.name} - $${item.price}`).join('\n');
        alert(`🛒 Your Cart:\n\n${items}\n\nTotal: $${total}`);
    }
}

renderProducts();