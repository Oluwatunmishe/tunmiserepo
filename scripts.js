/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Clear the form
  this.reset();
});

// Catalog Data
const techAccessCatalog = [
  {
    name: "Chromebook Donation",
    type: "Device",
    image: "chromebook.jpg",
    description: "A durable laptop for students in rural schools. 25 needed in 2025.",
    location: "Ogun State, Nigeria",
    urgent: true
  },
  {
    name: "Girls in Tech Ibadan",
    type: "Program",
    image: "girlsintech.jpg",
    description: "Weekend workshops teaching young girls how to code and create.",
    location: "Ibadan, Nigeria",
    urgent: false
  },
  {
    name: "Chinedu's Story",
    type: "Success Story",
    image: "chinedu.jpg",
    description: "With access to an old PC, Chinedu learned Python and now tutors others.",
    location: "Enugu, Nigeria",
    urgent: false
  },
  {
    name: "Tablet Drive",
    type: "Device",
    image: "tablet.jpg",
    description: "Tablets for primary school students to access digital learning resources.",
    location: "Lagos, Nigeria",
    urgent: true
  }
];

// Display Catalog
function displayCatalog(items) {
  const catalog = document.getElementById("catalog-grid");
  catalog.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      ${item.urgent ? `<span style="display:inline-block; background:#e91e63; color:white; padding:5px 10px; border-radius:6px;">Urgent</span>` : ""}
    `;

    catalog.appendChild(card);
  });
}

// Search Function
function searchItems() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredItems = techAccessCatalog.filter(item =>
    item.name.toLowerCase().includes(searchInput)
  );
  displayCatalog(filteredItems);
}

// Filter by Type
function filterByType() {
  const selectedType = document.getElementById("typeFilter").value;
  if (selectedType === "All") {
    displayCatalog(techAccessCatalog);
  } else {
    const filteredItems = techAccessCatalog.filter(item => item.type === selectedType);
    displayCatalog(filteredItems);
  }
}

// On Load
document.addEventListener("DOMContentLoaded", () => {
  displayCatalog(techAccessCatalog);
});
function sortCatalog() {
  const sortOption = document.getElementById("sortOption").value;

  // Create a copy of the catalog so we don't mutate the original
  const sortedItems = [...techAccessCatalog];

  if (sortOption === "nameAsc") {
    bubbleSort(sortedItems, true);
  } else if (sortOption === "nameDesc") {
    bubbleSort(sortedItems, false);
  }

  // If no sorting, show the original
  if (sortOption === "none") {
    displayCatalog(techAccessCatalog);
  } else {
    displayCatalog(sortedItems);
  }
}

// Bubble Sort Algorithm for sorting by name
function bubbleSort(arr, ascending = true) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const condition = ascending
        ? arr[j].name.toLowerCase() > arr[j + 1].name.toLowerCase()
        : arr[j].name.toLowerCase() < arr[j + 1].name.toLowerCase();
      if (condition) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

