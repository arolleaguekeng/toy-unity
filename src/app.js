const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/db');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/auth')

/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

app.use(express.json());

app.use('/api', userRoutes);
app.use(cors());
app.listen(port, () => {
    console.log(`our application is running at port ${port}`)
})

