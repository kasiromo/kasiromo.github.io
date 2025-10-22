const songs = {
  song1: {
    artist: "Ice Nine Kills",
    name: "A Work of Art",
    image: "img/ice9kills.jpeg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/68/65/d8/6865d845-1ff8-ff66-da05-7b53da027d3c/mzaf_14840774269253663709.plus.aac.p.m4a"
  },
  song2: {
    artist: "Bad Omens",
    name: "Specter",
    image: "img/specter.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/49/bd/8849bd32-24f5-d1f7-2eb3-6dfa8e0c81e8/mzaf_11658858456624550447.plus.aac.p.m4a"
  },
  song3: {
    artist: "Sleep Token",
    name: "Caramel",
    image: "img/caramel.jpg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/6d/af/536daf8b-6cb9-48bb-e282-95b5921eea2e/mzaf_6836382742231339556.plus.aac.p.m4a"
  },
  song4: {
    artist: "Pierce the Veil",
    name: "Bulls in the Bronx",
    image: "img/bitb.jpeg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/2c/25/4d2c25da-b3f1-be4d-e264-a1444ac24132/mzaf_6198108386088025168.plus.aac.p.m4a"
  },
  song5: {
    artist: "Slipknot",
    name: "A Liar's Funeral",
    image: "img/alf.jpeg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b0/49/e6/b049e64a-b1fe-5ad5-dcbb-8044cdaee9ac/mzaf_1637569678555622892.plus.aac.p.m4a"
  },
  song6: {
    artist: "The Plot in You",
    name: "Left Behind",
    image: "img/lb.jpeg",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/94/a2/c4/94a2c4f7-a347-05fe-342e-9dea6043ae76/mzaf_16387257773502087122.plus.aac.p.m4a"
  }
};

const jukebox = document.getElementById("jukebox");
const title = document.getElementById("song-title");
const cover = document.getElementById("album-cover");
const player = document.getElementById("audio-player");

// For the "for" and "function playSong(key)" elements, I was able to develop most of the content within these JS elements on my own after some YouTube tutorials. But, I did use AI to double-check me, and made a few revisions to these specific parts of my JS code through the help of AI.
for (let key in songs) {
  const song = songs[key];
  const card = document.createElement("div");
  card.classList.add("song-card");
  card.innerHTML = `
    <img src="${song.image}" alt="${song.name}" class="song-thumb">
    <p>${song.artist} - ${song.name}</p>
  `;
  card.addEventListener("click", () => playSong(key));
  jukebox.appendChild(card);
}

function playSong(key) {
  const s = songs[key];
  title.textContent = `${s.artist} - ${s.name}`;
  cover.src = s.image;
  player.innerHTML = `
    <audio controls autoplay src="${s.audio}" type="audio/m4a"></audio>
  `;
}