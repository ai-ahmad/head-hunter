const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));



const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});