const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Allow CORS requests from any origin
app.use(cors({
  origin: '*'
}));

app.get("/", (req, res) => {
    console.log("request received", os.hostname());
    res.send(`Hello from ${os.hostname()}!`);
});

app.listen(PORT, '0.0.0.0', () => {    
    console.log(`Server listening on port ${PORT}`);
});