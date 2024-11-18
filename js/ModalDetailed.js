$(document).ready(function() {
    // Khi nhấp vào sản phẩm, hiển thị modal tương ứng
    $('[data-toggle="modal"]').click(function() {
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
    });

    // Đóng modal khi nhấp vào nút đóng
    $('.modal .close').click(function() {
        $(this).closest('.modal').modal('hide');
    });

    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Đã thêm sản phẩm vào giỏ hàng!");
    }

    // Xử lý sự kiện click cho nút "Thêm vào giỏ hàng"
    $('.add-to-cart').click(function (e) {
        e.preventDefault();
        const product = {
            id: $(this).data('id'),
            name: $(this).data('name'),
            price: $(this).data('price'),
            image: $(this).data('image'),
        };
        addToCart(product);
    });
});