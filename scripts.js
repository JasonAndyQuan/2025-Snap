import data from "./data.js"; //DATA SOURCE
import { searchBar, formatMilliseconds, handleSort } from "./dataOperations.js";
const { albums } = data;
console.log(albums);

// This function adds cards the page to display the data in the array
const selected = new Set();
function handleRemove(album) {
  selected.delete(album);
  console.log(selected);
  showSelected();
}


function showButtons() {
  const sortingOptions = [
    "Release-Date",
    "Alphabetical",
    "Runtime",
    "Track-count",
    "Popularity",
  ];
  const filteringOptions = ["Artist", "Genre"];
  const possibleArtists = new Set();
  const possibleGenres = new Set();
  for (const album of albums) {
    possibleArtists.add(album.artists[0].name);
    for (const genre of album.genres) possibleGenres.add(genre);
  }

  console.log(possibleArtists);
  console.log(possibleGenres);
  const sorts = document.querySelector(".dropDown");
  const sortDropdownToggler = document.querySelector("#sorts .toggle")
  sortDropdownToggler.addEventListener("click", () =>{
    sorts.style.display = (sorts.style.display == "none") ? "flex" : "none";
    sortDropdownToggler.style.display = "none";
    console.log(sorts);
  })

  const filters = document.querySelector("#filters");
  for (const option of sortingOptions){
    const container = document.createElement("li");
    const sortButton = document.createElement("button");
    sortButton.textContent = option;
    sortButton.classList.add(option);
    sortButton.addEventListener(("click"), ()=>{
      showCards(handleSort(albums, option))
      sortDropdownToggler.style.display = "flex";
      sorts.style.display = "none";
      sortDropdownToggler.textContent = option;
    })
    container.appendChild(sortButton);
    sorts.appendChild(container);
  }
}
/**
 *         <div class="mutators">
          <h3 id="sorts">Sort by ...
            <div class="dropDown"></div>
          </h3>
          <h3 id="filters">Filter by ...
            <div class="artistDropdown"></div>
            <div class="genres"> </div>
          </h3>
          <input
            type="search"
            id="searchBar"
            placeholder="Search Album name or Date"
          />
        </div>
 */

function showCards(view) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  for (let i = 0; i < view.length; i++) {
    let currentAlbum = view[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, currentAlbum); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
function showSelected() {
  const selectedContainer = document.getElementById("selectedContainer");
  const selectedTemplate = document.querySelector(".selectedCard");

  selectedContainer.innerHTML = "";
  if (selected.size == 0) {
    const empty = document.createElement("p");
    empty.textContent =
      "List currently empty, select albums from the catalog below...";
    selectedContainer.appendChild(empty);
  } else {
    for (const album of selected) {
      const nextCard = selectedTemplate.cloneNode(true);
      editSelectedContent(nextCard, album);
      selectedContainer.appendChild(nextCard);
    }
  }
  const matchPercentage = document.querySelector(".matchPercentage");
  const percentage = (selected.size / albums.length) * 100;
  matchPercentage.textContent =
    percentage +
    "% - " +
    (percentage < 10
      ? "little to no match"
      : percentage < 25
      ? "getting there ..."
      : percentage < 50
      ? "Solid match ..."
      : percentage < 75
      ? "Almost perfect ..."
      : "Perfect match !");
}

function insertAlbumCover(card, album) {
  const albumName = card.querySelector("a");
  albumName.textContent =
    album.name + " (" + album.release_date.slice(0, 4) + ")";
  albumName.href = album.external_urls.spotify;
  albumName.target = "_blank";
  const albumCover = card.querySelector("img");
  albumCover.src = album.images[0].url;
  albumCover.alt = album.name + " Poster";
}

function editSelectedContent(card, album) {
  card.style.display = "flex";
  insertAlbumCover(card, album);

  const remove = card.querySelector("#removeButton");
  remove.addEventListener("click", () => {
    handleRemove(album);
  });
}
function editCardContent(card, album) {
  card.style.display = "block";
  insertAlbumCover(card, album);
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
  album.runTime = totalSeconds;
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
document.addEventListener("DOMContentLoaded", () => {
  showCards(albums);
  showSelected();
  showButtons();
});
