//----------------readdir---------------------

require("dotenv").config;
const mongoose = require("mongoose");



// var fs = require("fs");

// fs.open("./",  (err, dir) => {
//   if (err) {
//     console.log(err);
//   }
//   else{

//     console.log(dir);
//   }
// });

//----------------open file---------------------

// var fs = require("fs");

// fs.open("newfile2.txt", "w", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Saved!");
// });

//------------------write file-------------------

// var fs = require("fs");

// fs.writeFile("newfile1.txt", "abcd", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Saved!");
// });

//------------------read file-------------------

// const fs = require("fs");

// fs.readFile('./newfile1.txt', 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

//------------------append file-------------------

// var fs = require("fs");

// fs.appendFile("./newfile1.txt", " hello Pakistan", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Saved!");
// });

//------------------create server with http-------------------

// const http = require("http");

// let courses = [
//   {
//     id: 1,
//     course: "Mern",
//   },
//   {
//     id: 2,
//     course: "Mean",
//   },
// ];

// const server = http.createServer((req, res) => {
//   if (req.url == "/courses") {
//     if (req.method == "GET") {
//       res.write(JSON.stringify(courses));
//     }
//     if (req.method == "POST") {
//       // req.body;
//       res.write(JSON.stringify(courses));
//     }
//     res.end();
//   }
//   if (req.url == "/users") {
//     res.write("/Users Route  is working...");
//     res.end();
//   }
// });

// const PORT = 1000

// server.listen(PORT, ()=>{
//   console.log(`server listening on ${PORT}`)
// })

//------------------create server with express-------------------

const StudentRouter = require("./Routes/studentRouter");
const TeacherRouter = require("./Routes/teacherRouter");
const InstituteRouter = require("./Routes/instituteRouter");
const CourseRouter = require("./Routes/courseRouter");

const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/student", StudentRouter);
app.use("/api/teacher", TeacherRouter);
app.use("/api/institute", InstituteRouter)
app.use("/api/course", CourseRouter)

mongoose
  .connect('mongodb+srv://AzharZafar:azharali@cluster0.mswyhiq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000, () => {
      console.log(`server listening on 5000 and also Database Connected Successfully`);
    });
  }) 
  .catch((err) => {
    console.log("Database not connection established",err);
  });

