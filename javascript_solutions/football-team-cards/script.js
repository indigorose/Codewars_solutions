const footballTeam = {
	team: 'Jamaica National Football Team',
	year: 2026,
	headCoach: 'Rudolph Speid',
	players: [
		{
			name: 'Amal Knight',
			position: 'goalkeeper',
			isCaptain: false,
		},
		{
			name: 'Andre Blake',
			position: 'goalkeeper',
			isCaptain: true,
		},
		{
			name: 'Richard King',
			position: 'defender',
			isCaptain: false,
		},
		{
			name: 'Tayvon Gray',
			position: 'defender',
			isCaptain: false,
		},
		{
			name: 'Isaac Hayden',
			position: 'midfielder',
			isCaptain: false,
		},
		{
			name: 'Isaac Hayden',
			position: 'midfielder',
			isCaptain: false,
		},
		{
			name: 'Karoy Anderson',
			position: 'midfielder',
			isCaptain: false,
		},
		{
			name: 'Daniel Johnson',
			position: 'midfielder',
			isCaptain: false,
		},
		{
			name: 'Ravel Morrison',
			position: 'midfielder',
			isCaptain: false,
		},
		{
			name: 'Cory Burke',
			position: 'forward',
			isCaptain: false,
		},
		{
			name: 'Dujuan Richards',
			position: 'forward',
			isCaptain: false,
		},
		{
			name: 'Rumarn Burrell',
			position: 'forward',
			isCaptain: false,
		},
	],
};
const team = document.getElementById('team');
const year = document.getElementById('year');
const headCoach = document.getElementById('head-coach');
const cards = document.querySelector('.cards');
const selectPlayers = document.getElementById('players');

team.innerHTML = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerHTML = footballTeam.headCoach;

const players = footballTeam.players;

console.log(players);

function displayPlayerCards(playersToDisplay) {
	cards.innerHTML = '';
	playersToDisplay.forEach((player) => {
		const card = document.createElement('div');
		card.className = 'player-card';
		card.innerHTML = `
    <h2>${player.isCaptain ? '(Captain)' : ''} ${player.name}</h2>
    <p>Position: ${player.position}`;

		cards.appendChild(card);
	});
}

displayPlayerCards(players);

function playerCards(positionCategory) {
	const positions =
		positionCategory === 'all'
			? footballTeam.players
			: footballTeam.players.filter(
					({ position }) => position === positionCategory,
				);
	console.log(positions);
	return displayPlayerCards(positions);
}

selectPlayers.addEventListener('change', (e) => {
	console.log(e.target.value);
	playerCards(e.target.value);
});
