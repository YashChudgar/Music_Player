let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.getElementById("song-title");
let songArtist = document.getElementById("song-artist");
let songList = document.getElementById("song-list");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

// Toggle the visibility of the song list
function toggleSongList() {
    if (songList.style.display === "none" || songList.style.display === "") {
        songList.style.display = "block";
        setTimeout(() => songList.style.opacity = "1", 0); // Smooth transition
    } else {
        songList.style.opacity = "0";
        setTimeout(() => songList.style.display = "none", 300); // Hide after opacity transition
    }
}

// Select a song from the list and play it
function selectSong(title, artist, src, image) {
    songTitle.textContent = title;
    songArtist.textContent = artist;
    song.src = src;
    document.querySelector(".song-img").src = image;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

    // Hide the song list after selecting a song
    songList.style.opacity = "0";
    setTimeout(() => songList.style.display = "none", 300); // Hide after opacity transition
}
