import data from "./data.js"; //DATA SOURCE
import {
  searchBar,
  formatMilliseconds,
  handleSort,
  handleFilter,
} from "./dataOperations.js";
const { albums } = data;
console.log(albums);


let currentDisplay = albums;

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

  const possibleArtists = new Set();
  const possibleGenres = new Set();
  const effectiveFilters = {
    artist: "",
    genre: "",
  };
  for (const album of albums) {
    possibleArtists.add(album.artists[0].name);
    for (const genre of album.genres) possibleGenres.add(genre);
  }

  console.log(possibleArtists);
  console.log(possibleGenres);
  const sorts = document.querySelector(".dropDown");
  const sortDropdownToggler = document.querySelector("#sorts .toggle");
  dropDownCreator(sorts, sortDropdownToggler, sortingOptions, handleSort);
  const filters = document.querySelector("#filters .artistDropdown");
  const filtersToggle = document.querySelector("#filters .artistToggle");
  filterDropDownCreator(
    filters,
    filtersToggle,
    possibleArtists,
    handleFilter,
    effectiveFilters,
    true
  );

  const genres = document.querySelector(".genres");
  const genresToggle = document.querySelector(".genresToggle");

  filterDropDownCreator(
    genres,
    genresToggle,
    possibleGenres,
    handleFilter,
    effectiveFilters,
    false
  );
}

function dropDownCreator(parent, toggler, options, handleData) {
  toggler.addEventListener("click", () => {
    parent.style.display = parent.style.display == "none" ? "flex" : "none";
    toggler.style.display = "none";
  });
  for (const option of options) {
    const container = document.createElement("li");
    const sortButton = document.createElement("button");
    sortButton.textContent = option;
    sortButton.addEventListener("click", () => {
      currentDisplay = handleData(currentDisplay, option);
      showCards(currentDisplay); // <---- MERGE SORT IS USED HERE, handleSort(albums[],"") can be found in dataOperations.js
      toggler.style.display = "flex";
      parent.style.display = "none";
      toggler.textContent = option;
    });
    container.appendChild(sortButton);
    parent.appendChild(container);
  }
}
function filterDropDownCreator(
  parent,
  toggler,
  options,
  handleData,
  effectiveFilters,
  isArtist
) {
  toggler.addEventListener("click", () => {
    parent.style.display = parent.style.display == "none" ? "flex" : "none";
    toggler.style.display = "none";
  });
  for (const option of Array.from(options)) {
    const container = document.createElement("li");
    const filterButton = document.createElement("button");
    filterButton.textContent = option;
    filterButton.addEventListener("click", () => {
      toggler.addEventListener("click", () => {
        if (isArtist) {
          effectiveFilters.artist = "";
        } else effectiveFilters.genre = "";
        currentDisplay = handleData(albums, effectiveFilters);
        showCards(currentDisplay); 
      });
      if (isArtist) {
        effectiveFilters.artist = option;
      } else effectiveFilters.genre = option;
      currentDisplay = handleData(currentDisplay, effectiveFilters);
      showCards(currentDisplay);
      toggler.style.display = "flex";
      parent.style.display = "none";
      toggler.textContent = option;
    });
    container.appendChild(filterButton);
    parent.appendChild(container);
  }
}

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
