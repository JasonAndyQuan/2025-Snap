
// Search Bar logic
const searchBar = document.querySelector("input#searchBar");
searchBar.addEventListener("input", (e) => {
  const cardContainer = document.getElementById("card-container");
  const list = cardContainer.children;
  for (let i = 0; i < list.length; i++) {
    const title = list[i].querySelector("a").textContent.toLowerCase();
    if (title.includes(e.target.value.toLowerCase())) 
        list[i].style.display = "";
    else 
        list[i].style.display = "none";
  }
});




export { searchBar };
