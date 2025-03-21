// =======================================================================
// ============ Fetch & Display data from JSON Files =====================

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("data/readingLogs.json")
//         .then(response => response.json())
//         .then(data => {
//             displayLogs(data);
//         })
//         .catch(error => console.error("Error loading reading logs:", error));
// });

// function displayLogs(data) {
//     const container = document.getElementById("reading-logs");

//     Object.keys(data).forEach(platform => {
//         const platformSection = document.createElement("div");
//         platformSection.classList.add("platform");

//         const platformTitle = document.createElement("h2");
//         platformTitle.textContent = platform.toUpperCase();
//         platformSection.appendChild(platformTitle);

//         data[platform].forEach(entry => {
//             const logEntry = document.createElement("div");
//             logEntry.classList.add("log-entry");

//             const img = document.createElement("img");
//             img.src = entry.image;
//             img.alt = entry.title;

//             const details = document.createElement("div");
//             details.innerHTML = `<h3>${entry.title}</h3><p>${entry.status}</p>`;

//             logEntry.appendChild(img);
//             logEntry.appendChild(details);
//             platformSection.appendChild(logEntry);
//         });

//         container.appendChild(platformSection);
//     });
// }

// ==================================================
// ------------- Simple Display of Data -------------
// fetch('/server/data/readingLogs.json')
//     .then(response => response.json())
//     .then(data => {
//         const dashboard = document.getElementById('reading-dashboard');
//         data.forEach(entry => {
//             const div = document.createElement('div');
//             div.classList.add('entry');
//             div.innerHTML = `
//                 <img src="${entry.image}" alt="${entry.title}" style="width:100px">
//                 <h3>${entry.title}</h3>
//                 <p>${entry.status}</p>
//             `;
//             dashboard.appendChild(div);
//         });
//     })
//     .catch(error => console.error('Error loading reading logs:', error));



fetch('/server/data/readingLogs.json')
.then(response => response.json())
.then(data => displayReadingLogs(data))
.catch(error => console.error('Error loading JSON:', error));

function displayReadingLogs(data) {
    const container = document.getElementById("reading-list");
    container.innerHTML = "";

    data.forEach(entry => {
        const item = document.createElement("div");
        item.classList.add("entry");
        item.innerHTML = `
            <img src="${entry.cover}" alt="${entry.title}">
            <div class="overlay">
                <h3>${entry.title}</h3>
                <p>${entry.author}</p>
                <p>Status: ${entry.status}</p>
            </div>
        `;
        container.appendChild(item);
    });
}
