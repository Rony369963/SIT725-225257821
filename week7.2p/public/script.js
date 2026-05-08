const socket = io();
const updatesDiv = document.getElementById('updates');

socket.on('order-status', (data) => {
    const update = document.createElement('div');
    update.classList.add('card');
    update.innerHTML = `
        <h3>Order #${data.orderId}</h3>
        <p>Status: ${data.status}</p>
        <p>Time: ${data.time}</p>
    `;
    updatesDiv.prepend(update);
});