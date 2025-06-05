
const data = {
  "playlists": [
    {
      "playlistID": "1234",
      "playlist_titles": "Playlist One",
      "author": "Imani",
      "playlist_images": "assets/img/playlist1.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "5"
    },
    {
      "playlistID": "5678",
      "playlist_titles": "Summer Vibes",
      "author": "Jaden",
      "playlist_images": "assets/img/playlist2.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "12"
    },
    {
      "playlistID": "9012",
      "playlist_titles": "Workout Mix",
      "author": "Samantha",
      "playlist_images": "assets/img/playlist3.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "20"
    },
    {
      "playlistID": "3456",
      "playlist_titles": "Chillout Session",
      "author": "Ethan",
      "playlist_images": "assets/img/playlist4.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "8"
    },
    {
      "playlistID": "7890",
      "playlist_titles": "Party Anthems",
      "author": "Lily",
      "playlist_images": "assets/img/playlist5.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "15"
    },
    {
      "playlistID": "2345",
      "playlist_titles": "Focus Flow",
      "author": "Noah",
      "playlist_images": "assets/img/playlist6.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "10"
    },
    {
      "playlistID": "6789",
      "playlist_titles": "Retro Revival",
      "author": "Ava",
      "playlist_images": "assets/img/playlist7.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "18"
    },
    {
      "playlistID": "4567",
      "playlist_titles": "Lo-Fi Beats",
      "author": "Julian",
      "playlist_images": "assets/img/playlist8.png",
      "songs": [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5",
        "Song 6",
        "Song 7",
        "Song 8",
        "Song 9",
        "Song 10",
        "Song 11",
        "Song 12",
        "Song 13",
        "Song 14",
        "Song 15"
      ],
      "like_count": "22"
    }
  ]
};

const container = document.getElementById('playlist-cards');

for (let i = 0; i < data.playlists.length; i++) {
    const playlist = data.playlists[i];
    const card = document.createElement('article');
    card.className = "playlist-card";

    card.innerHTML = `
    <img src="${playlist.playlist_images}" alt="${playlist.playlist_titles}" class="playlist-images">
    <h3 class="playlist-titles">${playlist.playlist_titles}</h3>
    <p class="author">${playlist.author}</p>
    <p class="like-count">${playlist.like_count}</p>
    `;

    container.appendChild(card);
}


const modal = document.getElementById("modal-content")
const span = document.getElementsByClassName("close")[0];
const playlistImageElement = document.querySelector(".playlist-images");
const playlistTitleElement = document.querySelector(".playlist-titles");
const authorElement = document.querySelector(".author")

function openModal(playlist) {
    console.log("in open modal function")
    document.getElementById("playlist-images").src = playlist.playlist_images;
    document.getElementById("playlistTitle").innerText = playlist.playlist_titles;
    document.getElementById("author").innerText = playlist.author;
    modal.style.display = "flex";

}

span.onclick = function() {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const playlistCards = document.querySelectorAll('.playlist-cards');
    playlistCards.forEach((card) => {
    
        console.log("this works");
        card.addEventListener("click", function(){
        const playlistId = playlists[playlistId]
        const playlist = playlists[playlistId]
        openModal(playlist);
    });
  });
});


        
    





