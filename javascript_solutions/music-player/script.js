const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const allSongs = [
	{
		id: 0,
		title: 'Scratching The Surface',
		artist: 'Quincy Larson',
		duration: '4:25',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3',
	},
	{
		id: 1,
		title: "Can't Stay Down",
		artist: 'Quincy Larson',
		duration: '4:15',
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
	},
	{
		id: 2,
		title: 'Still Learning',
		artist: 'Quincy Larson',
		duration: '3:51',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3',
	},
	{
		id: 3,
		title: 'Cruising for a Musing',
		artist: 'Quincy Larson',
		duration: '3:34',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3',
	},
	{
		id: 4,
		title: 'Never Not Favored',
		artist: 'Quincy Larson',
		duration: '3:35',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3',
	},
	{
		id: 5,
		title: 'From the Ground Up',
		artist: 'Quincy Larson',
		duration: '3:12',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3',
	},
	{
		id: 6,
		title: 'Walking on Air',
		artist: 'Quincy Larson',
		duration: '3:25',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3',
	},
	{
		id: 7,
		title: "Can't Stop Me. Can't Even Slow Me Down.",
		artist: 'Quincy Larson',
		duration: '3:52',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3',
	},
	{
		id: 8,
		title: 'The Surest Way Out is Through',
		artist: 'Quincy Larson',
		duration: '3:10',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3',
	},
	{
		id: 9,
		title: 'Chasing That Feeling',
		artist: 'Quincy Larson',
		duration: '2:43',
		src: 'https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3',
	},
];

const audio = new Audio();

const userData = {
	songs: allSongs,
	currentSong: null,
	songCurrentTime: 0,
};

const playSong = (id) => {
	const song = userData.songs.find((song) => song.id === id);
	audio.src = song.src;
	audio.title = song.title;
	if (userData.currentSong === null) {
		audio.currentTime = 0;
	} else {
		audio.currentTime = userData.songCurrentTime;
	}
	userData.currentSong = song;
	playButton.classList.add('playing');
	audio.play();
};

const pauseSong = () => {
	userData.songCurrentTime = audio.currentTime;
	playButton.classList.remove('playing');
	audio.pause();
};

const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);

const getNextSong = () => userData.songs[getCurrentSongIndex() + 1];

const playNextSong = () => {
	if (userData.currentSong === null) {
		playSong(userData.songs[0].id);
	}
};

playButton.addEventListener('click', () => {
	if (userData.currentSong === null) {
		playSong(userData.songs[0].id);
	} else {
		playSong(userData.currentSong.id);
	}
});

const songs = document.querySelectorAll('.playlist-song');

songs.forEach((song) => {
	const id = song.getAttribute('id').slice(5);
	const songBtn = song.querySelector('button');
	songBtn.addEventListener('click', () => {
		playSong(Number(id));
	});
});

pauseButton.addEventListener('click', pauseSong);
