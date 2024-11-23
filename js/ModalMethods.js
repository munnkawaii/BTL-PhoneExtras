$(document).ready(function() {
    // Hàm hiển thị giỏ hàng
    function displayCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItems = $('#cart-items');
        let totalAmount = 0;
        cartItems.empty();

        cart.forEach(item => {
            let total = item.price * item.quantity;
            totalAmount += total;
            cartItems.append(`
                <tr>
                    <td><img src="${item.image}"  style="width: 50px; height: 50px;"> ${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price} VND</td>
                    <td>${total} VND</td>
                    <td><button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Xóa</button></td>
                </tr>
            `);
        });

        $('#total-amount').text(totalAmount + ' VND');

        // Xử lý sự kiện xóa sản phẩm
        $('.remove-item').click(function() {
            let id = $(this).data('id');
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        });
    }

    // Hiển thị giỏ hàng khi tải trang
    displayCart();

    // Khi nhấp vào nút "Thanh Toán", hiển thị modal
    $('[data-toggle="modal"]').click(function() {
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
    });

    // Đóng modal khi nhấp vào nút đóng
    $('.modal .close').click(function() {
        $(this).closest('.modal').modal('hide');
    });

    // Xử lý sự kiện xác nhận thanh toán
    $('#confirmCheckout').click(function() {
        let fullName = $('#fullName').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        let note = $('#note').val();
        let discountCode = $('#discountCode').val();
        let paymentMethod = $('input[name="paymentMethod"]:checked').val();


    // Hiển thị thông báo đặt hàng thành công
    alert("Bạn đã đặt hàng thành công, chúng tôi sẽ đi đơn sớm cho bạn. Nếu có thắc mắc hãy liên hệ qua SĐT +024 567 8912. Xin chân thành cảm ơn bạn đã mua hàng tại cửa hàng chúng tôi!");
        // Đóng modal sau khi xác nhận
        $('#checkoutModal').modal('hide');
    });
});