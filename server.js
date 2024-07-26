const bodyParser = require('body-parser');
const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');

const app=express();
const port=3000;


app.use(bodyParser.json());
app.use(cors());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hippo'
})

db.connect((err)=>{

    if(err){
        console.error('could not connect to mysql');
        return
    }
    console.log('connect to mysql');
}
   
);



app.get('/employeesdata',(req,res)=>{

db.query('select * from employees',(err,results)=>{

    if(err){
return res.statusCode(500).json({error:err.message})
    }
res.json(results)
})

});

app.get('/data',(req,res)=>{
const userDetails=[{name:"harsha",role:"programmer"},{name:"veera",role:"developer"}]
    res.send(userDetails)
});

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
});