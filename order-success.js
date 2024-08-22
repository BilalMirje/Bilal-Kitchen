document.querySelectorAll('.order-now').forEach(function (element) {
    element.addEventListener('click', function () {
        Swal.fire({
            position: "centre",
            icon: "success",
            title: "Order Successful!",
            showConfirmButton: false,
            timer: 1500
          });
    });
});
