
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());







app.get('/', (req, res) => {
  // console.log(req);
  res.send('<h1>The server works</h1>');
});

app.get('/1', (req, res) => {
  res.send(req.url);
  
});
app.get('/tasks', (req, res) => {

  const tasks = [
    {
      id: 1,
      title: "Download Zoom",
      isCompleted: false
    },
    {
      id: 2,
      title: "Eat Fried Chicken",
      isCompleted: true
    },
    {
      id: 3,
      title: "Play Games",
      isCompleted: false
    },
    {
      id: 4,
      title: "Go for Shopping",
      isCompleted: true
    },
    {
      id: 5,
      title: "Watch Movie",
      isCompleted: false
    }
  ]
  


  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  let reqestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
});
/*
app.get('/roaa', (req, res) => {
  console.log('Roaa');
  res.json('Nomaan');
});
*/

app.post('/tasks2',(req,res)=>{
  let newtask=req.body
  console.log("done")
  tasks.push(newtask)
  res.send(newtask)
  // res.send("new task added")
})

app.put('/taskk/:id',(req,res)=>{
  let reqq=parseInt(req.originalUrl.slice(7));
 let taskk1=tasks.map(elem=>{
   if(elem.id===reqq){
     elem.isCompleted=!elem.isCompleted
   }
  return elem 
 })
 res.json(taskk1);

 
})

app.delete('/tas/:id',(req,res)=>{

  let del=parseInt(req.originalUrl.slice(5));
  let del1=tasks.filter(elem=>{
    return elem.id!==del
   
  })
  res.json(del1)
})





const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));

// const tasks = [
//   {
//     id: 1,
//     title: "Download Zoom",
//     isCompleted: false
//   },
//   {
//     id: 2,
//     title: "Eat Fried Chicken",
//     isCompleted: true
//   },
//   {
//     id: 3,
//     title: "Play Games",
//     isCompleted: false
//   },
//   {
//     id: 4,
//     title: "Go for Shopping",
//     isCompleted: true
//   },
//   {
//     id: 5,
//     title: "Watch Movie",
//     isCompleted: false
//   }
// ]
