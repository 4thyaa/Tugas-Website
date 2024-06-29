document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            cartCount.textContent = cartItemCount;
        });
    });
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.menu-container, .grid');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'flex';
}

// default bakalan muncul page coffe
showSection('coffee');