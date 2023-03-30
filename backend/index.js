const app = require('./app')
const db = require('./config/db');
const UserModel = require('./model/usermodel');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})