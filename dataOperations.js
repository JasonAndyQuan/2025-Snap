import data from "./data.js";
const { albums } = data;

/*
Data = {
  Albums = [
    Album = {
      popularity: int,
      Runtime: int,
      Track Count: int,
      Release Date: string,
      name: string,   (ALBUM NAME)
      genres: string[],     
      artist [
        {
        members: string[],
        name: string, (ARTIST NAME)
        debut: string
        }, 
        ...
        ],
        ...
    },
  ]
}
    const sortingOptions = ["Release Date", "Alphabetical","Runtime","Track count", "popularity"];
    const filteringOptions = ["Artist", "Genre"];
    const possibleArtists = newSet();
    const possibleGenres = [];
*/

// const sortingOptions = ["Release Date", "Alphabetical","Runtime","Track count", "popularity"];
// const filteringOptions = ["Artist", "Genre"];
// const activeFilters = {
//   artist:"",
//   genre:[],
// }

// function handleFilters(type, value){
//   activeFilters = {

//   }
// }

// Search Bar logic
const searchBar = document.querySelector("input#searchBar");
searchBar.addEventListener("input", (e) => {
  const cardContainer = document.getElementById("card-container");
  const list = cardContainer.children;
  for (let i = 0; i < list.length; i++) {
    const title = list[i].querySelector("a").textContent.toLowerCase();
    if (title.includes(e.target.value.toLowerCase()))
      list[i].style.display = "";
    else list[i].style.display = "none";
  }
});

//A function to convert milliseconds to the format (mm:ss)
function formatMilliseconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${paddedSeconds}`;
}

//Helper function for merge sort
function merge(left, right, comparator) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (comparator(left[i], right[j])) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

//merge sort the any given list, where list is the data and comparator makes the code compatible with multiple different conditions.
function mergeSort(list, comparator) {
  if (list.length <= 1) return list;
  
  const mid = Math.floor(list.length / 2);
  const left = mergeSort(list.slice(0, mid), comparator);
  const right = mergeSort(list.slice(mid), comparator);
  return merge(left, right, comparator);
}

function handleSort(list, option) {
  //possible options: "Release-Date","Alphabetical","Runtime","Track-count", "popularity"

  const comparator = //comparator will compare different elements of the object depending on what is selected.
  (option == "Popularity") ? 
    (l, r) => {
        return l.popularity > r.popularity;
    }
  : 
    (option=="Track-count") ?  (l, r) => {
    return l.total_tracks > r.total_tracks;
  } : (option == "Runtime") ? (l,r) => {
    return l.runTime > r.runTime;
  } : (option == "Alphabetical") ? (l,r) => {
    return l.name.toLowerCase() < r.name.toLowerCase();
  } : (l,r) => { //Release-Date
    return l.release_date.slice(0, 4) > r.release_date.slice(0, 4);
  } 

  return mergeSort(list, comparator);

}
export { searchBar, formatMilliseconds, handleSort };
