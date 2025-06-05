
const data = {
  "playlists": [
    {
      "playlistID": "1234",
      "playlist_titles": "Motivational Playlist",
      "author": "Imani",
      "playlist_images": "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
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
      "playlist_images": "https://cdn.pixabay.com/photo/2022/10/02/10/55/sunflower-7493240_1280.jpg",
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
      "playlist_images": "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
      "playlist_images": "https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_1280.jpg",
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
      "playlist_titles": "Party Mix",
      "author": "Lily",
      "playlist_images": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
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
      "playlist_images": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
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
      "playlist_titles": "Retro Mix",
      "author": "Ava",
      "playlist_images": "https://cdn.pixabay.com/photo/2016/11/23/00/23/hands-1851426_1280.jpg",
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
      "playlist_images": "https://cdn.pixabay.com/photo/2024/11/07/10/27/record-shop-9180482_1280.jpg",
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

    <div class="like-container">
    <button class="like-button">
        <img class="like-icon" src="https://openclipart.org/image/800px/234835" />
    </button>
    <span class="like-count">${playlist.like_count}</span>
    </div>
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


container.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
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


        
    





