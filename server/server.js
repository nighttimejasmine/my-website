// ============
// API Version
// ============
// ============
// require("dotenv").config();
// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const PORT = 5000;

// /**
//  * Fetch Goodreads, Kenmei, and Webtoons (Currently Reading)
//  */
// app.get("/currently-reading", async (req, res) => {
//     try {
//         const goodreads = await axios.get(`https://www.goodreads.com/review/list?v=2&id=${process.env.GOODREADS_USER_ID}&shelf=currently-reading&key=${process.env.GOODREADS_API_KEY}`);
//         const kenmei = await axios.get(`https://api.kenmei.co/v1/user/library`, { headers: { Authorization: `Bearer ${process.env.KENMEI_API_KEY}` } });
//         const webtoons = await axios.get(`https://api.webtoons.com/v1/user/reading-list`, { headers: { Authorization: `Bearer ${process.env.WEBTOON_API_KEY}` } });

//         res.json({ goodreads: goodreads.data, kenmei: kenmei.data, webtoons: webtoons.data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /**
//  * Fetch Serialzd, Letterboxd, and MAL (Currently Watching)
//  */
// app.get("/currently-watching", async (req, res) => {
//     try {
//         const serialzd = await axios.get(`https://api.serialzd.com/v1/user/watching`, { headers: { Authorization: `Bearer ${process.env.SERIALZD_API_KEY}` } });
//         const letterboxd = await axios.get(`https://letterboxd-api-url/user/recent`, { headers: { Authorization: `Bearer ${process.env.LETTERBOXD_API_KEY}` } });
//         const mal = await axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=watching`, { headers: { "X-MAL-Client-ID": process.env.MAL_CLIENT_ID } });

//         res.json({ serialzd: serialzd.data, letterboxd: letterboxd.data, mal: mal.data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// =====================================================================

// const express = require("express");
// const fs = require("fs");
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(express.static("public")); // Serve static files

// // Route to update logs.json
// app.post("/update-log", (req, res) => {
//     const newLog = req.body;

//     fs.readFile("logs.json", (err, data) => {
//         if (err) return res.status(500).json({ message: "Error reading logs file" });

//         let logs = JSON.parse(data);

//         // Determine if it's a reading or watching update
//         if (["Goodreads", "Webtoon", "Kenmei"].includes(newLog.source)) {
//             logs.currentlyReading.push(newLog);
//         } else if (["MAL", "Serialzd", "Letterboxd"].includes(newLog.source)) {
//             logs.currentlyWatching.push(newLog);
//         }

//         fs.writeFile("logs.json", JSON.stringify(logs, null, 2), (err) => {
//             if (err) return res.status(500).json({ message: "Error updating logs" });

//             res.json({ message: "Log updated successfully!" });
//         });
//     });
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// ====================================================================

require("dotenv").config(); // import dotenv in server
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
// -------------- App Access to the API Keys --------------
// const goodreadsApiKey = process.env.GOODREADS_API_KEY; 
// const malClientId = process.env.MAL_CLIENT_ID;
// ------------- Log Test Variable = check if APIs are loading correctly -----------
// console.log("Goodreads API Key:", process.env.GOODREADS_API_KEY);
console.log("MAL API Key:", process.env.malClientId);

app.use(cors());
app.use(express.json());

app.get("/api/reading", (req, res) => {
    fs.readFile("./server/data/readingLogs.json", "utf8", (err, data) => {
        if (err) return res.status(500).send("Error loading data.");
        res.json(JSON.parse(data));
    });
});

app.get("/api/watching", (req, res) => {
    fs.readFile("./server/data/watchingLogs.json", "utf8", (err, data) => {
        if (err) return res.status(500).send("Error loading data.");
        res.json(JSON.parse(data));
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));

