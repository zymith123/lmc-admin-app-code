require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer')
const upload = multer()



const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array())

mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log('Connected to the database!'))
.catch((err) => console.log(err));

app.use('/api/user', require('./routes/routes'))

app.listen(port, () => console.log(`server running at http://localhost:${port}`))