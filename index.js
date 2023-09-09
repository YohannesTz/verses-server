const express = require('express');
const fs = require('fs');
const app = express();

const json = JSON.parse(fs.readFileSync('bible_verses.json'));

// Endpoint to get a random verse
app.get('/api/v1/random', (req, res) => {
    const verses = json.books.flatMap((book) =>
        book.chapters.flatMap((chapter) => chapter.verses)
    );

    const randomIndex = Math.floor(Math.random() * verses.length);
    const randomVerse = verses[randomIndex];
    const { reference, text } = randomVerse;

    res.json({ reference, text });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});