document.querySelectorAll('.sign-success').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        if (username === "" || password === "") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Please fill in all the details!",
                showConfirmButton: true
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign In Successfully!",
                showConfirmButton: false,
                timer: 1500
            });

        }
    });
});
