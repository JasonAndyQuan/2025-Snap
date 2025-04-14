import data from "./data.js"; //DATA SOURCE
import { searchBar } from "./dataOperations.js";
const { albums } = data;
console.log(albums);

// This function adds cards the page to display the data in the array
const selected = new Set();

function handleRemove(album){
  selected.delete(album);
  console.log(selected);
  showSelected();
}
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < albums.length; i++) {
    let currentAlbum = albums[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, currentAlbum); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
function showSelected(){
  const selectedContainer = document.getElementById("selectedContainer");
  const selectedTemplate = document.querySelector(".selectedCard");

  selectedContainer.innerHTML="";
  if (selected.size == 0 ) {
    const empty = document.createElement("p");
    empty.textContent =
      "List currently empty, select albums from the catalogs below...";
    selectedContainer.appendChild(empty);
  } else {
    for (const album of selected) {
      const nextCard = selectedTemplate.cloneNode(true);
      editSelectedContent(nextCard, album);
      selectedContainer.appendChild(nextCard);
    }
  }
  const matchPercentage = document.querySelector(".matchPercentage");
  const percentage = (selected.size/albums.length)*100;
matchPercentage.textContent = percentage + "% - " + 
    (percentage < 10 ? "little to no match" :
    (percentage < 25) ? "getting there ..." :
    (percentage < 50) ? "Solid match ..." :
    (percentage < 75) ? "Almost perfect ..." : "Perfect match !");

}
function editSelectedContent(card, album) {
  card.style.display = "flex";
  const albumName = card.querySelector("a");
  albumName.textContent =
    album.name + " (" + album.release_date.slice(0, 4) + ")";
  
  albumName.href = album.external_urls.spotify;
  albumName.target = "_blank";

  const albumCover = card.querySelector("img");
  albumCover.src = album.images[0].url;
  albumCover.alt = album.name + " Poster";

  const remove = card.querySelector("#removeButton");
  remove.addEventListener("click", () => {
    handleRemove(album);
  })

}

function formatMilliseconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${minutes}:${paddedSeconds}`;
}

function editCardContent(card, album) {
  card.style.display = "block";
  const albumName = card.querySelector("a");
  albumName.textContent =
    album.name + " (" + album.release_date.slice(0, 4) + ")";
  albumName.href = album.external_urls.spotify;
  albumName.target = "_blank";

  const albumCover = card.querySelector("img");
  albumCover.src = album.images[0].url;
  albumCover.alt = album.name + " Poster";
  const albumArtist = card.querySelector(".details p");
  albumArtist.textContent = album.artists[0].name;

  const artistDetails = card.querySelector(".artistDetails ul");
  const artist = document.createElement("li");
  const artistDebut = document.createElement("li");
  const groupMembers = document.createElement("li");

  artist.textContent = albumArtist.textContent;
  artistDebut.textContent = "Debut: " + album.artists[0].debut;
  groupMembers.textContent = "Members: ";
  for (let i = 0; i < album.artists[0].members.length; i++) {
    groupMembers.textContent += album.artists[0].members[i];
    if (i != album.artists[0].members.length - 1)
      groupMembers.textContent += ", ";
  }

  artistDetails.appendChild(artist);
  artistDetails.appendChild(artistDebut);
  artistDetails.appendChild(groupMembers);

  const trackList = card.querySelector("#songs");
  let totalSeconds = 0;
  for (let i = 0; i < album.tracks.items.length; i++) {
    const track = album.tracks.items[i];
    const li = document.createElement("li");
    const trackName = document.createElement("a");
    const trackLength = document.createElement("p");
    trackName.target = "_blank";
    trackName.textContent = track.name;
    trackLength.textContent = formatMilliseconds(track.duration_ms);
    trackName.href = track.external_urls.spotify;
    li.appendChild(trackName);
    li.appendChild(trackLength);
    trackList.appendChild(li);
    totalSeconds += track.duration_ms;
  }
  const albumFooter = card.querySelector(".albumFooter p");
  albumFooter.textContent = `${
    album.total_tracks
  } songs | Runtime: ${formatMilliseconds(totalSeconds)} | Popularity score: ${
    album.popularity
  } / 100`;

  const selectedButton = card.querySelector(".addButton");
  selectedButton.addEventListener("click", () => {
    selected.add(album);
    console.log(selected);
    selectedButton.classList.add("alreadySelected");
    selectedButton.textContent = "SELECTED !";
    showSelected();
  });
}

const scroller = document.querySelector("#scrollToTop");
scroller.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", ()=> {showCards(); showSelected()});
