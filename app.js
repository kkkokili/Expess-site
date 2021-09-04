// jshint esversion:8
const express = require("express");

const app = express();

const serverless = require('serverless-http');

const data=require('./full-stack.json');
const projects=data.projects;
var projectItems=projects;

app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'pug');

app.use(express.static("public"));
// '/static',

app.get('/', (req, res) =>{
  res.render('index');
});

app.get('/skills', (req, res) => {
  res.render("skills");
});

app.get('/full-stack', (req, res) => {
  projectItems=projects;
   res.render('full-stack', {
     projects: projectItems
   });
});

app.get('/data-analytics', (req, res) =>{
  res.render('data-analytics');
});

app.get('/front-end', (req, res) => {
   projectItems = projects.filter(item => item.type === "Front-End" );
   res.render('full-stack', {
     projects: projectItems
   });
});


app.get('/back-end', (req, res) => {
  projectItems = projects.filter(item => item.type === "Back-End" );
  res.render('full-stack', {
    projects: projectItems
  });
});


module.exports.handler = serverless(app);

app.listen(3000, () => {
  console.log("Port 3000 has started to listen!");
});
