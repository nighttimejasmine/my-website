// =======================================================================
// ============ Fetch & Display data from JSON Files =====================

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("data/watchingLogs.json")
//         .then(response => response.json())
//         .then(data => {
//             displayLogs(data);
//         })
//         .catch(error => console.error("Error loading watching logs:", error));
// });

// function displayLogs(data) {
//     const container = document.getElementById("watching-logs");

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
// fetch('/server/data/watchingLogs.json')
//     .then(response => response.json())
//     .then(data => {
//         const dashboard = document.getElementById('watching-dashboard');
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
//     .catch(error => console.error('Error loading watching logs:', error));


// --------------------------------------------

// fetch('/server/data/watchingLogs.json')
// .then(response => response.json())
// .then(data => displayWatchingLogs(data))
// .catch(error => console.error('Error loading JSON:', error));

// function displayWatchingLogs(data) {
//     const container = document.getElementById("watching-list");
//     container.innerHTML = "";

//     data.forEach(entry => {
//         const item = document.createElement("div");
//         item.classList.add("entry");
//         item.innerHTML = `
//             <img src="${entry.cover}" alt="${entry.title}">
//             <div class="overlay">
//                 <h3>${entry.title}</h3>
//                 <p>Progress: ${entry.progress}</p>
//                 <p>${entry.source}</p>
//             </div>
//         `;
//         container.appendChild(item);
//     });
// }

// --------------------------------------------


// document.addEventListener("DOMContentLoaded", function () {
//     fetch('/server/data/watchingLogs.json')
//       .then(response => response.json())
//       .then(data => displayWatchingLogs(data))
//       .catch(error => console.error('Error loading watching logs:', error));
//   });
  
//   function displayWatchingLogs(data) {
//     const container = document.getElementById("watching-list");
//     container.innerHTML = ""; // Clear "Loading" message
  
//     data.forEach(entry => {
//       const entryDiv = document.createElement("div");
//       entryDiv.classList.add("entry");
  
//       // Determine the text to display based on status
//       let statusText = (entry.status.toLowerCase() === "completed") 
//                         ? "Completed" 
//                         : entry.progress;
  
//       // Get source icon image via helper function
//       let sourceIcon = getSourceIcon(entry.source);
  
//       // Set inner HTML with clickable cover and hover overlay
//       entryDiv.innerHTML = `
//         <a href="${entry.link}" target="_blank">
//           <img src="${entry.cover}" alt="${entry.title}">
//         </a>
//         <div class="overlay">
//           <h3>${entry.title}</h3>
//           <p>${statusText}</p>
//           <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
//         </div>
//       `;
//       container.appendChild(entryDiv);
//     });
//   }
  
//   function getSourceIcon(source) {
//     // Map known source names to their icon paths
//     const icons = {
//         "MAL": "https://icons-for-free.com/iff/png/256/MyAnimeList-1329545826150253280.png",
//         "Letterboxd": "https://cdn-1.webcatalog.io/catalog/letterboxd/letterboxd-icon-unplated.png?v=1740099065439",
//         "Serialzd": "https://media.imgcdn.org/repo/2024/02/serializd/65cb301c74859-serializd-Icon.webphttps://oakreef.ie/icons/serializd.png",
//         "MDL": "https://play-lh.googleusercontent.com/s4s3KGi3Bikz2J80YBKsbdOASUblBN7m7OrdXHppbCdg8AYfAizKO9sx05cHFiMuTI86",
//     };
//     return icons[source] || "assets/images/NightJasmine-Site_Backgrounds/webBackground04.jpg";
//   }

// ==================================

document.addEventListener("DOMContentLoaded", function () {
    fetch('/server/data/watchingLogs.json')
      .then(response => response.json())
      .then(data => displayWatchingLogs(data))
      .catch(error => console.error('Error loading watching logs:', error));
  });
  
  function displayWatchingLogs(data) {
    const container = document.getElementById("watching-list");
    container.innerHTML = ""; // Clear "Loading" message
  
    data.forEach(entry => {
      const entryDiv = document.createElement("div");
      entryDiv.classList.add("entry");
  
      // Determine the text to display based on status
      let statusText = (entry.status.toLowerCase() === "completed") 
                        ? "Completed" 
                        : entry.progress;
  
      // Get source icon image via helper function
      let sourceIcon = getSourceIcon(entry.source);
  
      // Set inner HTML with clickable cover and hover overlay
      entryDiv.innerHTML = `
        <a href="${entry.link}" target="_blank">
          <img src="${entry.cover}" alt="${entry.title}">
        </a>
        <div class="overlay">
          <h3>${entry.title}</h3>
          <p>${statusText}</p>
          <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
        </div>
      `;
      container.appendChild(entryDiv);
    });
  }
  
  function getSourceIcon(source) {
    // Map known source names to their icon paths
    const icons = {
        "MAL": "https://icons-for-free.com/iff/png/256/MyAnimeList-1329545826150253280.png",
        "Letterboxd": "https://cdn-1.webcatalog.io/catalog/letterboxd/letterboxd-icon-unplated.png?v=1740099065439",
        "Serialzd": "https://media.imgcdn.org/repo/2024/02/serializd/65cb301c74859-serializd-Icon.webphttps://oakreef.ie/icons/serializd.png",
        "MDL": "https://play-lh.googleusercontent.com/s4s3KGi3Bikz2J80YBKsbdOASUblBN7m7OrdXHppbCdg8AYfAizKO9sx05cHFiMuTI86",
    };
    return icons[source] || "assets/images/NightJasmine-Site_Backgrounds/webBackground04.jpg";
  }
