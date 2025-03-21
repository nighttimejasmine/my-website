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

// =======================================================================================
// =======================================================================================

// ------------ Manual Version ------------
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // Serve static files

// Route to update logs.json
app.post("/update-log", (req, res) => {
    const newLog = req.body;

    // Update readingLogs.json
    fs.readFile("readingLogs.json", (err, data) => {
        if (err) return res.status(500).json({ message: "Error with ReadingLogs file" });

        // if (["Goodreads", "Webtoon", "Kenmei"].includes(newLog.source)) {
        //     logs.currentlyReading.push(newLog);

        logs.currentlyReading.push(newLog);

        fs.writeFile("readingLogs.json", JSON.stringify(logs, null, 2), (err) => {
            if (err) return res.status(500).json({ message: "Error updating logs" });

            res.json({ message: "Log updated successfully!" });

        });

    });

    // Update watchingLogs.json
    fs.readFile("watchingLogs.json", (err, data) => {
        if (err) return res.status(500).json({ message: "Error with WatchingLogs file" });

        logs.currentlyWatching.push(newLog);

        fs.writeFile("watchingLogs.json", JSON.stringify(logs, null, 2), (err) => {
            if (err) return res.status(500).json({ message: "Error updating logs" });

            res.json({ message: "Watching Log successfully updated!" });
        });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));