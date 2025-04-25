
const events = [
  { name: "Jazz in the Park", type: "Concert", date: "2025-05-10", location: "New York", timeAwarded: "3 hrs", link: "#" },
  { name: "Shakespeare on the Lake", type: "Play", date: "2025-05-11", location: "Chicago", timeAwarded: "2 hrs", link: "#" },
  { name: "Salsa Under the Stars", type: "Dance", date: "2025-05-12", location: "Miami", timeAwarded: "3 hrs", link: "#" },
  { name: "ArtWalk SF", type: "Art Show", date: "2025-05-13", location: "San Francisco", timeAwarded: "4 hrs", link: "#" },
  { name: "Improv Night", type: "Play", date: "2025-05-14", location: "Austin", timeAwarded: "2 hrs", link: "#" },
  { name: "Contemporary Ballet", type: "Dance", date: "2025-05-15", location: "Chicago", timeAwarded: "3 hrs", link: "#" },
  { name: "Graffiti Jam", type: "Art Show", date: "2025-05-16", location: "New York", timeAwarded: "2 hrs", link: "#" },
  { name: "Poetry & Jazz Night", type: "Concert", date: "2025-05-17", location: "San Francisco", timeAwarded: "3 hrs", link: "#" },
  { name: "Mural Making", type: "Workshop", date: "2025-05-18", location: "Austin", timeAwarded: "4 hrs", link: "#" },
  { name: "Sunset Yoga + Art", type: "Workshop", date: "2025-05-19", location: "Miami", timeAwarded: "2 hrs", link: "#" },
  { name: "Indie Rock Revival", type: "Concert", date: "2025-05-20", location: "Chicago", timeAwarded: "3 hrs", link: "#" },
  { name: "Painting & Wine", type: "Workshop", date: "2025-05-21", location: "Austin", timeAwarded: "2 hrs", link: "#" },
  { name: "Broadway Karaoke", type: "Play", date: "2025-05-22", location: "New York", timeAwarded: "1 hr", link: "#" },
  { name: "Breakdance Showdown", type: "Dance", date: "2025-05-23", location: "San Francisco", timeAwarded: "3 hrs", link: "#" },
  { name: "Outdoor Symphony", type: "Concert", date: "2025-05-24", location: "Miami", timeAwarded: "4 hrs", link: "#" },
  { name: "Sculpture Garden Tour", type: "Art Show", date: "2025-05-25", location: "Chicago", timeAwarded: "2 hrs", link: "#" },
  { name: "Theater Flash Mob", type: "Play", date: "2025-05-26", location: "Austin", timeAwarded: "2 hrs", link: "#" },
  { name: "Folk Music Night", type: "Concert", date: "2025-05-27", location: "New York", timeAwarded: "3 hrs", link: "#" },
  { name: "Latin Dance Class", type: "Dance", date: "2025-05-28", location: "Miami", timeAwarded: "2 hrs", link: "#" },
  { name: "Street Photography Walk", type: "Workshop", date: "2025-05-29", location: "San Francisco", timeAwarded: "2 hrs", link: "#" },
  { name: "Digital Art Creation", type: "Workshop", date: "2025-05-30", location: "Chicago", timeAwarded: "3 hrs", link: "#" },
  { name: "Live Theater Tasting", type: "Play", date: "2025-05-31", location: "Austin", timeAwarded: "1 hr", link: "#" },
  { name: "Afrobeats Night", type: "Dance", date: "2025-06-01", location: "New York", timeAwarded: "3 hrs", link: "#" },
  { name: "Interactive Light Show", type: "Art Show", date: "2025-06-02", location: "San Francisco", timeAwarded: "2 hrs", link: "#" },
  { name: "Cat Sitting at the Great Wall of China", type: "Pet Care", date: "2025-06-03", location: "Great Wall of China", timeAwarded: "3 hrs", link: "#" }
];

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
