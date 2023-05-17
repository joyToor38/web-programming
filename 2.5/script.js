function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

let wishlist = document.querySelector('.wishlist-success')
let totalPrice = document.querySelector('.total-price')
totalPrice.hidden = true;
wishlist.hidden = true

document.querySelector('#cart').addEventListener("click", function(){
  let quantity = document.querySelector('#quantity').value
  totalPrice.hidden = false
  totalPrice.innerHTML = `Total : ₹${3000*quantity}`
})

document.querySelector('#wishlist').addEventListener("click", function(){
  this.style.backgroundColor = 'green';
  wishlist.hidden = false
})