const songs_API = "http://fsa-async-await.herokuapp.com/api/guided-practice/songs";
const artists_API = "http://fsa-async-await.herokuapp.com/api/guided-practice/artists";
const routes_API = "http://fsa-async-await.herokuapp.com/api/guided-practice/genres";


async function fetchAllSong() {
    try {
        const response = await fetch(`${songs_API}`)
        const songs = await response.json();
        return songs;
    } catch (error) {
        console.log(error);
    }
}

const renderSong = (song) => {
    return song.title;
}

function renderAllSongs(songs) {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML = '';
    songs.forEach((song) => {
        const songElement = renderSong(song);
        songContainer.append(songElement);
    });
}

async function addNewSong(song) {
    console.log(JSON.stringify(song))
    const response = await fetch(`${songs_API}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    });
    
    const newSong = await response.json();
    console.log(newSong);
    return newSong;
}

function renderNewSongForm() {
    const newSongForm = document.querySelector('#new-song-form');
    newSongForm.innerHTML = `
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="artist">Artist</label>
        <input type="text" name="artist" id="artist" />
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" />
        <label for="release-date">Release Date</label>
        <input type="date" name="release-date" id="release-date" />
        <button type="submit">Submit</button>
      </form>
    `;

    newSongForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const genre = document.getElementById('genre').value;
        const releaseDate = document.getElementById('release-date').value;
    
        const newSong = {
            title,
            artist_id: artist,
            genre_id: genre,
            release_date: releaseDate
        };
        console.log(newSong)
        await addNewSong(newSong);
        const songs = await fetchAllSongs();
        renderAllSongs(songs);
    });
}



const init = async () => {
    const songs = await fetchAllSong();
    renderAllSongs(songs);
    renderNewSongForm();
}

init();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     