const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/db');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/auth')
const toyRoutes = require('./routes/toyRoutes')

/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));
app.use('/api', userRoutes);
app.use('/api', toyRoutes);

app.listen(port, () => {
    console.log(`our application is running at port ${port}`)
})

