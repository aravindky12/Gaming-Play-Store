// Fetch and display games
async function fetchGames() {
    const response = await fetch('api.php');
    const games = await response.json();
    const gameList = document.getElementById('game-list');
    
    gameList.innerHTML = ''; // Clear previous content
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="https://via.placeholder.com/200x150.png?text=${game.title}" alt="${game.title}">
            <h3>${game.title}</h3>
            <a href="${game.playstore_link}" target="_blank">Get on Play Store</a>
        `;
        gameList.appendChild(gameCard);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const games = document.querySelectorAll('.game-card');
    
    games.forEach(game => {
        const title = game.querySelector('h3').innerText.toLowerCase();
        game.style.display = title.includes(term) ? 'block' : 'none';
    });
});

fetchGames();
// Fetch and display games
async function fetchGames() {
    const response = await fetch('api.php');
    const games = await response.json();
    const gameList = document.getElementById('game-list');
    
    gameList.innerHTML = ''; // Clear previous content
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="https://via.placeholder.com/200x150.png?text=${game.title}" alt="${game.title}">
            <h3>${game.title}</h3>
            <a href="${game.playstore_link}" target="_blank">Get on Play Store</a>
        `;
        gameList.appendChild(gameCard);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const games = document.querySelectorAll('.game-card');
    
    games.forEach(game => {
        const title = game.querySelector('h3').innerText.toLowerCase();
        game.style.display = title.includes(term) ? 'block' : 'none';
    });
});

fetchGames();

function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const paragraphs = document.querySelectorAll("#contentArea p");

    paragraphs.forEach(p => {
        const text = p.textContent.toLowerCase();
        p.style.display = text.includes(input) ? "block" : "none";
    });
}
