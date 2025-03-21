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

// --------------------------------------------

// fetch('/server/data/readingLogs.json')
// .then(response => response.json())
// .then(data => displayReadingLogs(data))
// .catch(error => console.error('Error loading JSON:', error));

// function displayReadingLogs(data) {
//     const container = document.getElementById("reading-list");
//     container.innerHTML = "";

//     data.forEach(entry => {
//         const item = document.createElement("div");
//         item.classList.add("entry");
//         item.innerHTML = `
//             <img src="${entry.cover}" alt="${entry.title}">
//             <div class="overlay">
//                 <h3>${entry.title}</h3>
//                 <p>${entry.author}</p>
//                 <p>Status: ${entry.status}</p>
//             </div>
//         `;
//         container.appendChild(item);
//     });
// }

// --------------------- Without Source Icons -----------------------

// document.addEventListener("DOMContentLoaded", function () {
//     fetch('/server/data/readingLogs.json')
//       .then(response => response.json())
//       .then(data => displayReadingLogs(data))
//       .catch(error => console.error('Error loading reading logs:', error));
//   });   
  
//   function displayReadingLogs(data) {
//     const container = document.getElementById("reading-list");
//     container.innerHTML = ""; // Clear "Loading" message
  
//     data.forEach(entry => {
//       const entryDiv = document.createElement("div");
//       entryDiv.classList.add("entry");
  
//       // Create inner HTML with clickable cover (opens link in new tab)
//       entryDiv.innerHTML = `
//         <a href="${entry.link}" target="_blank">
//           <img src="${entry.cover}" alt="${entry.title}">
//         </a>
//         <div class="overlay">
//           <h3>${entry.title}</h3>
//           <p>${entry.author}</p>
//           <p>Status: ${entry.status}</p>
//           <p>Progress: ${entry.progress}</p>
//         </div>
//       `;
//       container.appendChild(entryDiv);
//     });
//   }


// ===============


document.addEventListener("DOMContentLoaded", function () {
    fetch("data/currently-reading.json")
      .then(response => response.json())
      .then(data => displayReadingLogs(data))
      .catch(error => console.error("Error loading reading logs:", error));
  });
  
  function displayReadingLogs(data) {
    const container = document.getElementById("reading-list");
    container.innerHTML = ""; // Clear loading text
  
    data.forEach(entry => {
      // Determine source icon based on entry.source using helper function
      let sourceIcon = getSourceIcon(entry.source);
  
      // Determine status text: if status is "Completed", show "Completed"; otherwise, show progress.
      let statusDisplay = (entry.status === "Completed") ? "Completed" : entry.progress;
  
      // Create each entry
      let entryDiv = document.createElement("div");
      entryDiv.classList.add("entry");
  
      entryDiv.innerHTML = `
        <a href="${entry.link}" target="_blank">
          <img src="${entry.cover}" alt="${entry.title}">
        </a>
        <div class="overlay">
          <h3>${entry.title}</h3>
          <p>${entry.author}</p>
          <p>${statusDisplay}</p>
          <img src="${sourceIcon}" alt="${entry.source}" class="source-icon">
        </div>
      `;
      container.appendChild(entryDiv);
    });
  }
  
  function getSourceIcon(source) {
    const icons = {
        "GoodReads": "https://static.vecteezy.com/system/resources/previews/055/030/405/non_2x/goodreads-circle-icon-logo-symbol-free-png.png",
        "Webtoon": "https://brokenpencil.com/wp-content/uploads/2018/07/Webtoon-Logo.png",
        "Kenmei": "https://cdn-1.webcatalog.io/catalog/kenmei/kenmei-icon-unplated.png?v=1714777132680"
    };
    return icons[source] || "assets/images/NightJasmine-Site_Backgrounds/webBackground04.jpg";
  }


  