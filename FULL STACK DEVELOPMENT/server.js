const express =reguire('express');
const app = express();
const port = ProcessingInstruction.env.port //3000;

app.use(express.json());

app.get('/',(req, res) =>{resizeBy.send('hello world');});

app.listen(port,()=>{console.log('server running on port $ {port}'); });

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const errorhandler = require('./middleware/Errorhandler');
app.use(errorhandler)