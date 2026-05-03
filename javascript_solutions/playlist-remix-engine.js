const playlists = [
	[
		{
			trackId: 'trk101',
			artist: 'Velvet Comet',
			title: 'Crimson Afterglow',
			votes: 5,
			bpm: 122,
		},
		{
			trackId: 'trk102',
			artist: 'Neon Harbor',
			title: 'Static Horizon',
			votes: 2,
			bpm: 108,
		},
		{
			trackId: 'trk103',
			artist: 'Lunar Arcade',
			title: 'Midnight Frequency',
			votes: 4,
			bpm: 128,
		},
	],
	[
		{
			trackId: 'trk201',
			artist: 'Solar Echo',
			title: 'Glass Skyline',
			votes: 3,
			bpm: 115,
		},
		{
			trackId: 'trk202',
			artist: 'Velvet Comet',
			title: 'Satellite Hearts',
			votes: 6,
			bpm: 124,
		},
	],
];

const emptyArray = {};

function flattenPlaylists(arr) {
	const flatPlaylist = [];
	if (!Array.isArray(arr)) return flatPlaylist;
	const handleFlat = (array, indexPath = []) => {
		let counter = 0;
		while (counter < array.length) {
			const val = array[counter];
			const currentPath = [...indexPath, counter];
			if (Array.isArray(val)) {
				handleFlat(val, currentPath);
			} else {
				flatPlaylist.push({ ...val, source: currentPath });
			}
			counter++;
		}
	};
	handleFlat(arr);
	return flatPlaylist;
}

function scoreTracks(playlist) {
	const scorePlaylist = flattenPlaylists(playlist);
	for (const track of scorePlaylist) {
		track.score = track.votes * 10 - Math.abs(track.bpm - 120);
	}
	return scorePlaylist;
}

function dedupeTracks(playlist) {
	const dedupePlaylist = flattenPlaylists(playlist);
	const seenTrackIds = new Set();

	return dedupePlaylist.filter((track) => {
		if (seenTrackIds.has(track.trackId)) {
			console.log('working');
			return false;
		}
		seenTrackIds.add(track.trackId);
		return true;
	});
}

function enforceArtistQuota(playlist, maxPerArtist) {
	const enforcedPlaylist = flattenPlaylists(playlist);
	const counts = {};
	return enforcedPlaylist.filter((track) => {
		const val = track['artist'];
		if (val === undefined) return true;

		counts[val] = (counts[val] || 0) + 1;
		if (counts[val] > maxPerArtist) {
			return false;
		}
		return true;
	});
}

function buildSchedule(playlist) {
	const buildPlaylist = flattenPlaylists(playlist);
	const schedulePlaylist = [];
	for (let i = 0; i < buildPlaylist.length; i++) {
		schedulePlaylist.push({
			slot: i + 1,
			trackId: buildPlaylist[i].trackId,
		});
	}
	return schedulePlaylist;
}

function remixPlaylist(playlist, maxPerArtist) {
	const flat = flattenPlaylists(playlist);
	const scored = scoreTracks(flat);
	const deduped = dedupeTracks(scored);
	const enforced = enforceArtistQuota(deduped, maxPerArtist);
	return buildSchedule(enforced);
}

// Take action on any group with more than one entry (duplicates)
console.log(buildSchedule(playlists));

// console.log(playlists);

// console.log(flattenPlaylists(playlists));
// console.log(flattenPlaylists(emptyArray));
