const cart = document.querySelector('.fa-cart-shopping');
const close = document.querySelector('.fa-times');
const sidebar = document.querySelector('.cart');

cart.addEventListener("click", function () {
    sidebar.classList.toggle('active');
  });

// $(document).ready(function(){
//     $('close').click(function(){
//         $('sidebar').css('display','hidden')
//     });
// });