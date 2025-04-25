
const events = [...Array(24).keys()].map(i => ({
  name: `Event ${i + 1}`,
  type: ["Concert", "Play", "Dance", "Art Show", "Workshop"][Math.floor(Math.random() * 5)],
  date: `2025-05-${String(10 + i).padStart(2, '0')}`,
  location: ["New York", "Chicago", "San Francisco", "Miami", "Austin"][Math.floor(Math.random() * 5)],
  timeAwarded: `${Math.floor(Math.random() * 5) + 1} hrs`,
  link: "#"
}));
events.push({
  name: "Cat Sitting at the Great Wall of China",
  type: "Pet Care",
  date: "2025-06-01",
  location: "Great Wall of China",
  timeAwarded: "3 hrs",
  link: "#"
});

function generateCards(containerId, count) {
  const container = document.getElementById(containerId);
  const selected = [...events].sort(() => 0.5 - Math.random()).slice(0, count);
  container.innerHTML = selected.map(e => `
    <div class="event-card">
      <h3>${e.name}</h3>
      <p>Type: ${e.type}</p>
      <p>Date: ${e.date}</p>
      <p>Location: ${e.location}</p>
      <p>Time Awarded: ${e.timeAwarded}</p>
      <button onclick="window.location.href='${e.link}'">Sign Up</button>
    </div>
  `).join('');
}

window.onload = () => {
  generateCards("recommendedEvents", 5);
  generateCards("eventsContainer", 25);
};
