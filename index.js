const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Il server funziona!'));

app.listen(port, () => console.log(`Server attivo su http://localhost:${port}`));

