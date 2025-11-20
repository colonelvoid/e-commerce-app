var cart = [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  updateCartCount();
  showNotification();
}

function updateCartCount() {
  var countElement = document.getElementById('cartCount');
  countElement.textContent = cart.length;
}

function showNotification() {
  var notif = document.getElementById('notification');
  notif.classList.add('show');
  setTimeout(function() {
    notif.classList.remove('show');
  }, 1500);
}

function showCart() {
  if (cart.length === 0) {
    alert('Your cart is empty! Start shopping! 🛍️');
    return;
  }
  
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  
  var itemsList = '';
  for (var i = 0; i < cart.length; i++) {
    itemsList += cart[i].name + ' - ₹' + cart[i].price.toLocaleString('en-IN') + '\n';
  }
  
  alert('🛒 Your Cart:\n\n' + itemsList + '\nTotal: ₹' + total.toLocaleString('en-IN'));
}
