require('dotenv').config();

const  express = require('express');
const app = express();
const connectDB = require('./config/db')
const routes = require('./routes/index');
const auth = require('./routes/authRutas');

    
connectDB();
app.use(express.json());




app.use((req, res, next) => {
  console.log(req.body); // l
  next();
});
app.use('/api/auth',auth);
app.use('/api/index',routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
        
        console.log(`Servidor ejecutado por en http://localhost:${PORT}`);

      });