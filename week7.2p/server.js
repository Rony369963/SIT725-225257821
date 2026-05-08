const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const orderStatuses = [
    'Order Received',
    'Packing',
    'Shipped',
    'Out for Delivery',
    'Delivered'
];

io.on('connection', (socket) => {
    console.log('A user connected');

    const interval = setInterval(() => {
        const randomStatus = orderStatuses[Math.floor(Math.random() * orderStatuses.length)];

        socket.emit('order-status', {
            orderId: Math.floor(Math.random() * 9000) + 1000,
            status: randomStatus,
            time: new Date().toLocaleTimeString()
        });
    }, 3000);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        clearInterval(interval);
    });
});

http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});