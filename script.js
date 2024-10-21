document.getElementById('enter-button').addEventListener('click', function() {
    document.querySelector('.landing').style.display = 'none';
    document.getElementById('home').style.display = 'block';
});

document.getElementById('track-button').addEventListener('click', function() {
    const orderId = document.getElementById('order-id').value;
    alert(`Tracking order ID: ${orderId}`);
});
