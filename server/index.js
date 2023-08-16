const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Замените на URL вашего фронтенда
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); // Отправляем успешный ответ на предварительный запрос
    } else {
        next(); // Продолжаем обработку обычных запросов
    }
});
app.use(cors({origin: 'http://localhost:4200'}));
app.listen(5000, (err) => {
    console.log('Server is listening on port 5000');
});

app.get('/', async (req, res) => {
    try {
        res.cookie('accessToken', 'asdkjlajksdljkaslkdj123809as09das90', {
            maxAge: 1000 * 60 * 60 * 24 * 366, httpOnly: true
        });
        res.send('Cookie');
    } catch (e) {
        console.log(e)
    }
})

app.post('/', async (req, res) => {
    try {
        res.cookie('accessTokenPost', 'kjhhkh8999999999y99asd98assaas89w', {
            maxAge: 1000 * 60 * 60 * 24 * 366, httpOnly: true
        });
        res.send('Cookie');
    } catch (e) {
        console.log(e)
    }
})
