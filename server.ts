import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('Tour Booking API 123!');
});

app.get('/tours', (req, res, next) => {
    res.send('Tour Booking API 123!');
});

app.post('/tours', (req, res, next) => {
    res.send('Tour Booking API 123!');
});

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
