document.addEventListener("DOMContentLoaded", function () {
    loadReadingLogs();
    loadWatchingLogs();
    getSourceIcon();
});

function loadReadingLogs() {
    fetch('data/currently-reading.json')
        .then(response => response.json())
        .then(data => {
            let readingContainer = document.getElementById("reading-dashboard");
            readingContainer.innerHTML = ""; // Clear previous entries

            // Get source icon image
            let sourceIcon = getSourceIcon(entry.source);
            
            data.forEach(entry => {
                let logItem = `
                    <div class="log-entry">
                        <a href="${entry.link}" target="_blank">
                        <img src="${entry.cover}" alt="${entry.title}">
                        </a>
                        <div class="log-overlay">
                            <h3>${entry.title}</h3>
                            <p>${entry.author}</p>
                            <p>Status: <strong>${entry.status}</strong></p>
                            <p>Progress: ${entry.progress}</p>
                            <p><small>Last updated: ${entry.updated}</small></p>
                            <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
                        </div>
                    </div>
                `;
                readingContainer.innerHTML += logItem;
            });
        });
}

function loadWatchingLogs() {
    fetch('data/currently-watching.json')
        .then(response => response.json())
        .then(data => {
            let watchingContainer = document.getElementById("watching-dashboard");
            watchingContainer.innerHTML = ""; // Clear previous entries
            
            // Determine what text to display based on status
            let statusText = entry.status === "Completed" ? "Completed" : entry.progress;
            // Get source icon image
            let sourceIcon = getSourceIcon(entry.source);
            
            data.forEach(entry => {
                let logItem = `
                    <a href="${entry.link}" target="_blank">
                        <img src="${entry.cover}" alt="${entry.title}">
                    </a>
                    <div class="log-overlay">
                        <h3>${entry.title}</h3>
                        <p>${statusText}</p>
                        <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
                    </div>
                `;
                watchingContainer.innerHTML += logItem;
            });
        });
}

// Function to return the correct source icon based on the source name
function getSourceIcon(source) {
    const icons = {
        "MAL": "https://www.svgrepo.com/show/331489/myanimelist.svg",
        "Letterboxd": "https://cdn-1.webcatalog.io/catalog/letterboxd/letterboxd-icon-unplated.png?v=1740099065439",
        "Serialzd": "https://media.imgcdn.org/repo/2024/02/serializd/65cb301c74859-serializd-Icon.webphttps://oakreef.ie/icons/serializd.png",
        "MDL": "https://play-lh.googleusercontent.com/s4s3KGi3Bikz2J80YBKsbdOASUblBN7m7OrdXHppbCdg8AYfAizKO9sx05cHFiMuTI86",

        "GoodReads": "https://static.vecteezy.com/system/resources/previews/055/030/405/non_2x/goodreads-circle-icon-logo-symbol-free-png.png",
        "Webtoon": "https://brokenpencil.com/wp-content/uploads/2018/07/Webtoon-Logo.png",
        "Kenmei": "https://cdn-1.webcatalog.io/catalog/kenmei/kenmei-icon-unplated.png?v=1714777132680"
    };
    return icons[source] || "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-pink-and-blue-circle-with-a-crossed-out-sign-vector-png-image_6847248.png"; // Default icon if not found
}


// -----------------------------------------
// Create the entry with a clickable link
// entryDiv.innerHTML = `
// <a href="${entry.link}" target="_blank">
//     <img src="${entry.image}" alt="${entry.title}">
//     <div class="overlay">
//         <h3>${entry.title}</h3>
//         <p>${statusText}</p>
//         <p>From: ${entry.source}</p>
//     </div>
// </a>
// `;

// =============================================

// document.addEventListener("DOMContentLoaded", function () {
//     loadDashboard("currently-watching", "data/currently-watching.json");
// });

// function loadDashboard(type, dataFile) {
//     fetch(dataFile)
//         .then(response => response.json())
//         .then(data => {
//             let container = document.querySelector(`.${type}-container`);
//             let entryList = document.createElement("div");
//             entryList.classList.add("entry-list");

//             data.forEach(entry => {
//                 let entryDiv = document.createElement("div");
//                 entryDiv.classList.add("entry");

//                 // Determine status display
//                 let statusText = entry.status === "Completed" ? "Completed" : entry.progress;

//                 // Get source icon image
//                 let sourceIcon = getSourceIcon(entry.source);

//                 entryDiv.innerHTML = `
//                     <a href="${entry.link}" target="_blank">
//                         <img src="${entry.image}" alt="${entry.title}">
//                     </a>
//                     <div class="overlay">
//                         <h3>${entry.title}</h3>
//                         <p>${statusText}</p>
//                         <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
//                     </div>
//                 `;

//                 entryList.appendChild(entryDiv);
//             });

//             container.appendChild(entryList);
//         })
//         .catch(error => console.error("Error loading data:", error));
// }

// // Function to return the correct source icon based on the source name
// function getSourceIcon(source) {
//     const icons = {
//         "MAL": "images/icons/mal-icon.png",
//         "Letterboxd": "images/icons/letterboxd-icon.png",
//         "Serialzd": "images/icons/serialzd-icon.png"
//     };
//     return icons[source] || "images/icons/default-icon.png"; // Default icon if not found
// }