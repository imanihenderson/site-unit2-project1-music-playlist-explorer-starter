// randint functionality to return a random index of the playlist list
document.addEventListener("DOMContentLoaded", () => {
  function getFeatured() {
    const index = Math.floor(Math.random() * data.playlists.length);
    return data.playlists[index];
  }

  function displayFeatured(playlist) {
    const card = document.getElementById("featured-playlist");

    card.innerHTML = `
      <img src="${playlist.playlist_images}" alt="${playlist.playlist_titles} cover" class="featured-img">
      <h2>${playlist.playlist_titles}</h2>
      <p><strong>By:</strong> ${playlist.author}</p>
      <p><strong>Songs:</strong> ${playlist.songs.join(", ")}</p>
    `;
  }

  const featured = getFeatured();
  displayFeatured(featured);
});