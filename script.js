let cart = [];

function addToCart(name, price)
{
    cart.push({ name: name, price: price });
    updateCartCount();
    showNotification();
}

function updateCartCount()
{
    document.getElementById('cartCount').textContent = cart.length;
}

function showNotification()
{
    const notif = document.getElementById('notification');
    notif.classList.add('show');
    setTimeout(function()
    {
        notif.classList.remove('show');
    }, 1500);
}

function showCart()
{
    if (cart.length === 0)
    {
        alert('Your cart is empty! Start shopping! 🛍️');
        return;
    }
    const total = cart.reduce(function(sum, item)
    {
        return sum + item.price;
    }, 0);
    const itemsList = cart.map(function(item)
    {
        return item.name + ' - ₹' + item.price.toLocaleString('en-IN');
    }).join('\n');
    alert('🛒 Your Cart:\n\n' + itemsList + '\n\nTotal: ₹' + total.toLocaleString('en-IN'));
}
