require('dotenv').config();

const  express = require('express');
const app = express();
const connectDB = require('./config/db')
const routes = require('./routes/index');
const auth = require('./routes/authRutas');

    
connectDB();
app.use(express.json());

// app.use('/', routes);


app.use('/api/index',routes);
app.use((req, res, next) => {
  console.log(req.body); // log the request body
  next();
});

app.use('/api/auth',auth);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
        
        console.log(`Servidor ejecutado por en http://localhost:${PORT}`);

      });