const searchSong = async () => {

    const searchText = document.getElementById('searchField').value;
    
    const url = `https://api.lyrics.ovh/suggest/${searchText}`

// load data

    const res = await fetch(url);
    const songData = await res.json();
    displaySongs(songData.data);

    document.getElementById('searchField').value = '';

} // search song function 


// displaying songs

const displaySongs = songs => {
    const songContainer = document.getElementById('songContainer');

    songContainer.innerHTML = '';

    songs.map(song => {


        const containerDiv = document.createElement('div');
        containerDiv.className = 'single-result row align-items-center my-3 p-3';


        containerDiv.innerHTML = `
        <div class="col-md-9">

        <h4 class="lyrics-name">${song.title}</h4>

        <p class="author lead">Album by <span>${song.artist.name}</span></p>

        <audio controls>
        <source src = "${song.preview}" type="audio/mp3">
        </audio>

        </div>

         <div class="col-md-3 text-md-right text-center">

        <button class="btn btn-success")">Get Lyrics</button>

         </div>
        
        `;

        songContainer.appendChild(containerDiv);

    })

} // display song function
