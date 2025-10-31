  const buttons = document.querySelectorAll('.verify-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "https://hamyaran-shop.ir/login";
        });
    });
