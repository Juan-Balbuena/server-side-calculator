const express = require('express');
const app = express();
const PORT = 5048;


app.use(express.json());
app.use(express.static('server/public'));

// app.use('/math', mathRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});