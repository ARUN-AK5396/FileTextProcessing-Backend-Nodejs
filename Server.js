const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { wordCount, fuzzySearch } = require('./wordUtils');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));



app.get('/', (req, res) => {
    res.send("Welcome to the Word Count API");
});

app.post('/wordCount', (req, res) => {
    const text = req.body.text;
    const result = wordCount(text);
    res.json(result);
});

app.post('/fuzzySearch', (req, res) => {
    const { text, searchTerm } = req.body;
    const result = fuzzySearch(text, searchTerm);
    res.json(result);
});

app.post('/processLargeFile', (req, res) => {
    const fileContent = req.body.fileContent;

    console.log('Received File Content:', fileContent); // Log the received file content

    // Process the file content here (e.g., word count or fuzzy search)
    const result = wordCount(fileContent);

    console.log('Processed Text:', result); // Log the processed text

    res.json({ processedText: result });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
