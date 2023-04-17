const express = require('express');
const db = require('./util/db')
const env = require('dotenv')
const PORT = process.env.PORT || 2500 ;
const app = express();
const path = require('path'); 
const cors = require('cors')





/*--------- ROUTER ---------*/ 
const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRout = require('./routes/category')
const ProductRout = require('./routes/product')
const CartRout = require('./routes/cart')
const initialData = require('./routes/admin/initialData')


/*--------- VARIABLE D'ENVIRONEMENT ---------*/
env.config()

/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

/*--------- API ---------*/
app.use(cors());
app.use(express.json())
app.use("/public",express.static(path.join(__dirname,"uploads")))
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRout);
app.use('/api', ProductRout);
app.use('/api', CartRout);
app.use('/api', initialData);



app.listen(PORT, () => {
    console.log(`server in running, on port ${PORT}`)
})