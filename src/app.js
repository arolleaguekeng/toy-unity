const express = require('express');
const db = require('./util/db');
const PORT = process.env.PORT || 3000 ;
const app = express();
const path = require('path'); 
const cors = require('cors')





/*--------- ROUTER ---------*/ 
const userRoutes = require('./routes/auth')
const categoryRout = require('./routes/category')
const ToyRout = require('./routes/toy')
const CartRout = require('./routes/cart')


/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

/*--------- API ---------*/
app.use(cors());
app.use(express.json())
app.use("/public",express.static(path.join(__dirname,"uploads")))
app.use('/api', userRoutes);
app.use('/api', categoryRout);
app.use('/api', ToyRout);
app.use('/api', CartRout);



app.listen(PORT, () => {
    console.log(`server in running, on port ${PORT}`)
})