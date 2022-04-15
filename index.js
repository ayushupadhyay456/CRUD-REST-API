import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';


const app=express();
const Port=5000;


app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/',(req,res)=>
{
    console.log(`[TEST]`);
    res.send(`Hello from Homepage. `)
});

app.listen(Port,()=>console.log(`Server Running on port:http://localhost:${Port}`));

