
// runs through each playlist

const container = document.getElementById('playlist-cards');

for (let i = 0; i < data.playlists.length; i++) {
    const playlist = data.playlists[i];
    const card = document.createElement('article');
    card.className = "playlist-card";

    card.innerHTML = `
    <img src="${playlist.playlist_images}" alt="${playlist.playlist_titles}" class="playlist-images">
    <h3 class="playlist-titles">${playlist.playlist_titles}</h3>
    <p class="author">${playlist.author}</p>

    <div class="like-container">
    <button class="like-button">
        <img class="like-icon" src="https://openclipart.org/image/800px/234835" />
    </button>
    <span class="like-count">${playlist.like_count}</span>
    <span class="delete-playlist-x">&times;</span>
    </div>
    `;

    card.addEventListener("click", () => {
        openModal(playlist);
    });

    container.appendChild(card);
}

// modal code
const modal = document.getElementById("modal-content")
const span = document.getElementsByClassName("close")[0];


// stores  current playlist for shuffle 
let currentPlaylist = null;

function openModal(playlist) {
    console.log("in open modal function");

    // stores the current playlist for shuffle functionality
    currentPlaylist = {...playlist};

    const imageEl = modal.querySelector("#modal-playlist-image");
    const titleEl = modal.querySelector("#playlist-titles");
    const authorEl = modal.querySelector("#author");
    const songListEl = modal.querySelector(".song-list");

    // Update the modal content
    imageEl.src = playlist.playlist_images;
    titleEl.innerText = playlist.playlist_titles;
    authorEl.innerText = playlist.author;

    // Display songs
    displaySongs(songListEl, playlist.songs);

    modal.style.display = "flex";
}

// Function to display songs in the song list
function displaySongs(songListEl, songs) {
    songListEl.innerHTML = "";
    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        songListEl.appendChild(li);
    });
}

span.onclick = function() {
    modal.style.display = "none";

};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// like button code

container.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', (event) => {
        // Stop event propagation to prevent modal from opening
        event.stopPropagation();

        const icon = button.querySelector('.like-icon');
        const countElem = button.nextElementSibling; // .like-count span
        let count = parseInt(countElem.textContent);

        if (button.classList.contains('liked')) {
            // Unlike
            button.classList.remove('liked');
            icon.src = 'https://openclipart.org/image/800px/234835'; // Use your empty heart icon path
            count--;
        } else {
            // Like
            button.classList.add('liked');
            icon.src = 'https://cdn.pixabay.com/photo/2013/07/13/10/50/heart-157895_960_720.png'; // Use your filled heart icon path or inline SVG data URI
            count++;
        }

        countElem.textContent = count;
    });
});

// shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// search functionality
function searchPlaylists(searchTerm) {
    const cards = document.querySelectorAll('.playlist-card');
    searchTerm = searchTerm.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.playlist-titles').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();

        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// add event listeners for search functionality
document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    searchPlaylists(searchTerm);
});

document.getElementById('search-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('search-input').value;
        searchPlaylists(searchTerm);
    }
});

// event listener for shuffle button
document.getElementById('shuffle-button').addEventListener('click', () => {
    if (currentPlaylist) {
        // Create a copy of the songs array to shuffle
        const shuffledSongs = [...currentPlaylist.songs];
        shuffleArray(shuffledSongs);

        // display shuffled songs
        const songListEl = modal.querySelector(".song-list");
        displaySongs(songListEl, shuffledSongs);
    }
});

document.addEventListener("DOMContentLoaded", function () {
const toggleDelete = document.querySelector('#delete-playlist')
const deletePlaylist = document.getElementsByClassName('delete-playlist-x');
const container = document.getElementById('playlist-cards');

function xAppear() {
    for (let i = 0; i < deletePlaylist.length; i++) {
            deletePlaylist[i].style.display = "flex";
        }
    }
function playlistDeletion(event) {
    // prevents other listeners from being triggered 
    event.stopPropagation();
    // finds closest playlist-card ancestor 
    const card = event.target.closest('.playlist-card');
    card.remove();
}

toggleDelete.addEventListener("click", () => {
        xAppear();
    });

  for (let i = 0; i < deletePlaylist.length; i++) {
        deletePlaylist[i].addEventListener("click", playlistDeletion);
    }
});



