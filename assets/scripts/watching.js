// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch watching logs from your backend endpoint or a JSON file
//     fetch("http://localhost:5000/currently-watching")
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById("watching-dashboard");
//             container.innerHTML = ""; // Clear the loading message

//             data.forEach(log => {
//                 const logEntry = document.createElement("div");
//                 logEntry.classList.add("log-entry");
//                 logEntry.innerHTML = `
//                     <img src="${log.image}" alt="${log.title}">
//                     <div>
//                         <h3><a href="${log.link}" target="_blank">${log.title}</a></h3>
//                         <p>Status: ${log.status} | Progress: ${log.progress}</p>
//                         <small>Source: ${log.source}</small>
//                     </div>      
//                 `;
//                 container.appendChild(logEntry);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching watching logs:", error);
//             document.getElementById("watching-dashboard").innerHTML = "Error loading logs.";
//         });
// });

// =======================================================================
// ============ Fetch & Display data from JSON Files =====================

document.addEventListener("DOMContentLoaded", function () {
    fetch("data/watchingLogs.json")
        .then(response => response.json())
        .then(data => {
            displayLogs(data);
        })
        .catch(error => console.error("Error loading watching logs:", error));
});

function displayLogs(data) {
    const container = document.getElementById("watching-logs");

    Object.keys(data).forEach(platform => {
        const platformSection = document.createElement("div");
        platformSection.classList.add("platform");

        const platformTitle = document.createElement("h2");
        platformTitle.textContent = platform.toUpperCase();
        platformSection.appendChild(platformTitle);

        data[platform].forEach(entry => {
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");

            const img = document.createElement("img");
            img.src = entry.image;
            img.alt = entry.title;

            const details = document.createElement("div");
            details.innerHTML = `<h3>${entry.title}</h3><p>${entry.status}</p>`;

            logEntry.appendChild(img);
            logEntry.appendChild(details);
            platformSection.appendChild(logEntry);
        });

        container.appendChild(platformSection);
    });
}