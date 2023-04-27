const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {

    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(
        tracksEndpoint);
        const data = await fetch(tracksEndpoint).then(response => response.json());
        console.log(data);
        for(let i = 0; i<5; i++){
       const template = `   <section class="track-item preview" onclick="playSongs('${data[i].id}')">
       <img src="${data[i].album.image_url}" alt="a picture of ${data[i].name} by ${data[i].artist.name}"/>
        <i class="fas fa-play play-track" aria-hidden="true"></i>
        <div class="label">
            <h2>${data[i].name}</h2>
            <p>
                ${data[i].artist.name}
            </p>
        </div>
    </section>`;
        document.querySelector("#tracks").insertAdjacentHTML('beforeend', template);}
}
function playSongs(id){
    const template = ` <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${id}" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>`
    document.querySelector("#artist").innerHTML = "<h1>Now Playing" +template;

}
async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(
        albumsEndpoint);
        const data = await fetch(albumsEndpoint).then(response => response.json());
        console.log(data);
        for(let i = 0; i<data.length; i++){
            const template = `  <section class="album-card" id="${data[i].id}">
            <div>
                <img src="${data[i].image_url}" alt = "Album cover of ${data[i].name}">
                <h2>${data[i].name}</h2>
                <div class="footer">
                    <a href="${data[i].spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>`;
             document.querySelector("#albums").insertAdjacentHTML('beforeend', template);}
}


async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(
artistEndpoint);
        const data = await fetch(artistEndpoint).then(response => response.json());
        if (data.length === 0){
            document.querySelector("#artist").innerHTML = "No results found";
            return;
        }

        console.log(data)
        console.log(data[0].name);
        console.log(data[0].image_url);

        const template = `<section class="artist-card"><img src="${data[0].image_url}" alt="a picture of ${data[0].name}"/><h2>${data[0].name}</h2><a href="${data[0].spotify_url}" target="_blank">view on spotify</a> </section>`
        document.querySelector('#artist').innerHTML = template
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {

        ev.preventDefault();
        search();
    }
}