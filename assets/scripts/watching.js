document.addEventListener("DOMContentLoaded", function () {
    // Fetch watching logs from your backend endpoint or a JSON file
    fetch("http://localhost:5000/currently-watching")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("watching-dashboard");
            container.innerHTML = ""; // Clear the loading message

            data.forEach(log => {
                const logEntry = document.createElement("div");
                logEntry.classList.add("log-entry");
                logEntry.innerHTML = `
                    <h3>${log.title}</h3>
                    <p>Status: ${log.status} | Progress: ${log.progress}</p>
                    <small>Source: ${log.source} | Updated: ${log.updated}</small>
                `;
                container.appendChild(logEntry);
            });
        })
        .catch(error => {
            console.error("Error fetching watching logs:", error);
            document.getElementById("watching-dashboard").innerHTML = "Error loading logs.";
        });
});