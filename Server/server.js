var express= require('express');
var app=express();
var axios= require('axios');
var mongoose= require('mongoose');
var path=require('path');
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
const url='mongodb://sher2629:Ruchik%4026@ds241664.mlab.com:41664/first_db';
mongoose.connect(url);
var db=mongoose.connection;
db.on('error', function(){
  console.log('Its an error')
});
db.once('open', function(){
  console.log("Connected");
});
db.on('disconnected',function(){
  mongoose.connect(url)
});
const menuSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  price: Number,
  
});
const orderSchema = new mongoose.Schema({
  table_no: Number,
  tot_unique: Number,
  tot_price: Number,
  comments: String,
  items: [{name: String,
      amt: Number}]
});
var menu= mongoose.model('menu', menuSchema, 'menu');
var order= mongoose.model('order',orderSchema,'orders');
var waiter= mongoose.model('waiter',orderSchema,'waiter');
var pending=mongoose.model('pending',orderSchema,'pending');


app.get('/menu',(req,res)=>{
    menu.find( {} , function(err,result){
    console.log(result);
    var objectified= {};
    objectified.menu_items=result;
    console.log(objectified);
    res.end(JSON.stringify(objectified)); 
  })
})
app.post('/process',(req,res)=>{
  console.log(req.body.obj);
  const {table_no, tot_unique, tot_price, comments, items}=req.body.obj;
  const obj= new order({
    table_no, tot_unique, tot_price, comments, items
  });
  console.log(obj);
  obj.save({table_no, tot_unique, tot_price, comments, items} , function(err,result){
    if(err) console.log(err);
    else {
      console.log(result);
      res.end('successful');
    }
  });
  res.end();
});


app.post('/waiter', function(req,res){
  console.log("Inside Waiter: ",req.body.result[0]);
  // req.body.result[0].save({table_no,tot_unique,tot_price, comments, items})
  const {table_no, tot_unique, tot_price, comments, items}=req.body.result[0];
  console.log(items);
  const obj= new waiter({
    table_no, tot_unique, tot_price, comments, items
  });
  console.log(obj);
  obj.save({table_no, tot_unique, tot_price, comments, items} , function(err,result){
    if(err) console.log(err);
    else {
      console.log(result);
      res.end('successful');
    }
  });
  res.end();
})


app.delete('/clearAll', function(req,res){
  waiter.remove({},function(err,result){
    console.log("Deleted");
    res.end("Deleted");
  })
 })

app.delete('/deltab1',function(req,res){
    order.find({table_no:1},function(err,result){
      console.log("find ke andr: ",result);
      axios.post('http://localhost:4001/waiter',{
        result
      })
      .then(function(result2){
        console.log("Posted");
      })
      .catch(function(err){
        console.log('Its an error: ',err);
      })
    })
    order.remove({table_no: 1},function(err,result){
      console.log("Deleted");
      res.end("Deleted");
    })
  });
  

app.delete('/deltab2',function(req,res){
  order.find({table_no:2},function(err,result){
    console.log("find ke andr: ",result);
    axios.post('http://localhost:4001/waiter',{
      result
    })
    .then(function(result2){
      console.log("Posted");
    })
    .catch(function(err){
      console.log('Its an error: ',err);
    })
  })
  order.remove({table_no: 2},function(err,result){
    console.log("Deleted");
    res.end("Deleted");
  })
});



app.delete('/deltab3',function(req,res){
  order.find({table_no:3},function(err,result){
    console.log("find ke andr: ",result);
    axios.post('http://localhost:4001/waiter',{
      result
    })
    .then(function(result2){
      console.log("Posted");
    })
    .catch(function(err){
      console.log('Its an error: ',err);
    })
  })
  order.remove({table_no: 3},function(err,result){
    console.log("Deleted");
    res.end("Deleted");
  })
});


app.delete('/deltab4',function(req,res){
  order.find({table_no:4},function(err,result){
    console.log("find ke andr: ",result);
    axios.post('http://localhost:4001/waiter',{
      result
    })
    .then(function(result2){
      console.log("Posted");
    })
    .catch(function(err){
      console.log('Its an error: ',err);
    })
  })
  order.remove({table_no: 4},function(err,result){
    console.log("Deleted");
    res.end("Deleted");
  })
});


app.delete('/deltab5',function(req,res){
  order.find({table_no:5},function(err,result){
    console.log("find ke andr: ",result);
    axios.post('http://localhost:4001/waiter',{
      result
    })
    .then(function(result2){
      console.log("Posted");
    })
    .catch(function(err){
      console.log('Its an error: ',err);
    })
  })
  order.remove({table_no: 5},function(err,result){
    console.log("Deleted");
    res.end("Deleted");
  })
});


app.get('/waiter',function(req,res){
    waiter.find({},function(err,result){
        var objectified= {};
        objectified.waiter_orders=result;
        console.log(objectified);
        res.end(JSON.stringify(objectified)); 
    })
})

app.delete('/waiter',function(req,res){
    order.find({table_no:1},function(err,result){
      console.log("find ke andr: ",result);
      axios.post('http://localhost:4001/waiter',{
        result
      })
      .then(function(result2){
        console.log("Posted");
      })
      .catch(function(err){
        console.log('Its an error: ',err);
      })
    })
    order.remove({table_no: 1},function(err,result){
      console.log("Deleted");
      res.end("Deleted");
    })
  });
  

app.get('/orders',function(req,res){
  order.find({},function(err,result){
    var objectified= {};
    objectified.table_orders=result;
    console.log(objectified);
    res.end(JSON.stringify(objectified)); 
  })
})
app.listen(4001);