const container = document.getElementById('cardsContainer');

function getStatusClass(status) {
  if (status === 'Available') return 'available';
  if (status === 'Occupied') return 'occupied';
  return 'out-of-order';
}

async function loadCards() {
  container.innerHTML = '<div class="loading-message">Loading socket cards...</div>';

  try {
    const response = await fetch('/api/sockets');
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      container.innerHTML = '<div class="error-message">No socket data found.</div>';
      return;
    }

    container.innerHTML = '';

    data.forEach((socket) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${socket.image}" alt="${socket.title}">
        <div class="card-content">
          <h2>${socket.title}</h2>
          <p><strong>Location:</strong> ${socket.locationName}</p>
          <p><strong>Suburb:</strong> ${socket.suburb}</p>
          <p><strong>Socket Type:</strong> ${socket.socketType}</p>
          <p><strong>Power Output:</strong> ${socket.powerOutput}W</p>
          <p><strong>Indoor:</strong> ${socket.indoor ? 'Yes' : 'No'}</p>
          <p><strong>Notes:</strong> ${socket.notes}</p>
          <span class="badge ${getStatusClass(socket.availability)}">${socket.availability}</span>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<div class="error-message">Failed to load cards. Please make sure the server and database are running.</div>';
  }
}

loadCards();