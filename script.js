document.addEventListener("DOMContentLoaded", function () {
    loadReadingLogs();
    loadWatchingLogs();
});

function loadReadingLogs() {
    fetch('data/currently-reading.json')
        .then(response => response.json())
        .then(data => {
            let readingContainer = document.getElementById("reading-dashboard");
            readingContainer.innerHTML = ""; // Clear previous entries
            
            data.forEach(entry => {
                let logItem = `
                    <div class="log-entry">
                        <img src="${entry.cover}" alt="${entry.title}">
                        <div class="log-info">
                            <h3>${entry.title}</h3>
                            <p>${entry.author}</p>
                            <p>Status: <strong>${entry.status}</strong></p>
                            <p>Progress: ${entry.progress}</p>
                            <p><small>Last updated: ${entry.updated}</small></p>
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
            
            data.forEach(entry => {
                let logItem = `
                    <div class="log-entry">
                        <img src="${entry.cover}" alt="${entry.title}">
                        <div class="log-info">
                            <h3>${entry.title}</h3>
                            <p>Platform: ${entry.platform}</p>
                            <p>Status: <strong>${entry.status}</strong></p>
                            <p>Progress: ${entry.progress}</p>
                            <p><small>Last updated: ${entry.updated}</small></p>
                        </div>
                    </div>
                `;
                watchingContainer.innerHTML += logItem;
            });
        });
}