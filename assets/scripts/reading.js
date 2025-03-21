// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch reading logs from your backend endpoint or a JSON file
//     fetch("http://localhost:5000/currently-reading")
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById("reading-dashboard");
//             container.innerHTML = ""; // Clear the loading message

//             // Iterate over your logs and insert them into the container
//             data.forEach(log => {
//                 const logEntry = document.createElement("div");
//                 logEntry.classList.add("log-entry");
//                 logEntry.innerHTML = `
//                     <h3>${log.title}</h3>
//                     <p>Status: ${log.status} | Progress: ${log.progress}</p>
//                     <small>Source: ${log.source} | Updated: ${log.updated}</small>
//                 `;
//                 container.appendChild(logEntry);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching reading logs:", error);
//             document.getElementById("reading-dashboard").innerHTML = "Error loading logs.";
//         });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const readingDashboard = document.getElementById("reading-dashboard");

//     // Mock data (Replace with API data if available)
//     const readingLogs = [
//         {
//             title: "The House in the Cerulean Sea",
//             author: "TJ Klune",
//             image: "https://covers.openlibrary.org/b/id/10513475-L.jpg",
//             status: "Reading on Goodreads",
//             link: "https://www.goodreads.com/book/show/45047384"
//         },
//         {
//             title: "One Piece",
//             author: "Eiichiro Oda",
//             image: "https://m.media-amazon.com/images/I/51DC0UFCI0L._SY445_SX342_.jpg",
//             status: "Reading on Kenmei",
//             link: "https://kenmei.co/manga/one-piece"
//         },
//         {
//             title: "Lore Olympus",
//             author: "Rachel Smythe",
//             image: "https://webtoon.com/path-to-image.jpg",
//             status: "Reading on Webtoons",
//             link: "https://www.webtoons.com/en/romance/lore-olympus"
//         }
//     ];

//     // Clear loading message
//     readingDashboard.innerHTML = "";

//     readingLogs.forEach(log => {
//         const logEntry = document.createElement("div");
//         logEntry.classList.add("activity-row");

//         logEntry.innerHTML = `
//             <img src="${log.image}" alt="${log.title}">
//             <div>
//                 <h3><a href="${log.link}" target="_blank">${log.title}</a></h3>
//                 <p>${log.author}</p>
//                 <p><strong>${log.status}</strong></p>
//             </div>
//         `;

//         readingDashboard.appendChild(logEntry);
//     });
// });

document.addEventListener("DOMContentLoaded", async function () {
    const readingDashboard = document.getElementById("reading-dashboard");

    try {
        const response = await fetch("http://localhost:5000/api/reading");
        const readingLogs = await response.json();

        readingDashboard.innerHTML = "";
        readingLogs.forEach(log => {
            const logEntry = document.createElement("div");
            logEntry.classList.add("activity-row");
            logEntry.innerHTML = `
                <img src="${log.image}" alt="${log.title}">
                <div>
                    <h3><a href="${log.link}" target="_blank">${log.title}</a></h3>
                    <p>${log.author}</p>
                    <p><strong>${log.status}</strong></p>
                </div>
            `;
            readingDashboard.appendChild(logEntry);
        });
    } catch (error) {
        console.error("Error fetching logs:", error);
    }
});