const express = require("express");
const app = express();
const port = 3000;
const crypto = require("crypto");
const path = require("path");
const methodOverride = require('method-override');

app.listen(port,()=>{
    console.log("Server is working...");
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));

let blogs = [
    {
        id : crypto.randomUUID(),
        user : "Rucha",
        content : " I love Art and Music"
    },
    {
        id : crypto.randomUUID(),
        user : "Rakesh",
        content : " Health is wealth"
    },
    {
        id : crypto.randomUUID(),
        user : "Priti",
        content : "Keep Learning"
    }
];

app.get("/blogs",(req,res)=>{
    res.render("index.ejs" , {blogs});
});

app.get("/blogs/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/blogs",(req,res)=>{
    console.log(req.body);
    let id = crypto.randomUUID();
    let { user , content } = req.body;
    blogs.push({id,user,content});
    res.redirect("/blogs");
});

app.get("/blogs/:id",(req,res)=>{
    console.log(req.params);
    let { id } = req.params ;
    let blog = blogs.find((b)=> b.id === id);
    console.log(blog);
    res.render("show.ejs" , {blog});
});

app.get("/blogs/:id/update",(req,res)=>{
    // console.log(req.params);
    let { id } = req.params ;
    let blog = blogs.find((b)=> b.id === id);
    res.render("edit.ejs" , {blog});
});

app.patch("/blogs/:id",(req,res)=>{
    // console.log(req.params);
    let {id} = req.params ;
    // console.log(id);
    let newContent = req.body.content ;
    let blog = blogs.find((b)=> b.id === id);
    if(blog)
    {
        blog.content = newContent ;
        res.redirect("/blogs");
    }
    else
    {
        res.render("error.ejs");
    }
});

app.delete("/blogs/:id",(req,res)=>{
    let {id} = req.params ;
    blogs = blogs.filter((b)=> b.id !== id);
    res.redirect("/blogs");
});