const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/db');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/auth')
const toyRoutes = require('./routes/toyRoutes')
const operationRoutes = require('./routes/operationRoutes')

/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));

app.get('/', (req, res) =>{
    console.log("hello");
    res.status(200).json("Welcome to Toyunity Api");
})
app.use('/api', userRoutes);
app.use('/api', toyRoutes);
app.use('/api', operationRoutes);

app.listen(port, () => {
    console.log(`our application is running at port ${port}`)
})

