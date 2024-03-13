import express from 'express';

const app = express();
const port = 3000;

app.get('/hi', (req, res) => {
    res.send('Helloooo World');
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});