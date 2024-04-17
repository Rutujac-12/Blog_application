import express from 'express';
import {  configDotenv } from 'dotenv';
configDotenv();
const app = express();

import User from './models/userModel.js';

app.use(express.json());
import deleteUser  from './controller/Deleteblog.js';
import bodyParser from 'body-parser';
import dbConnect from './config/database.js';
import { signUp } from './Controller/SignUp.js';
import blogPosts from './data.js';

 dbConnect();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogPosts });
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
    
});
app.get('/users', async (req, res) => {
    try {
       
        const users = await User.find({});
        res.render('blogs', { users });
       
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/create-blog',signUp);
app.post('/Delete/:id',deleteUser);
app.listen(4000, ()=>{
      console.log("Server Listening on Port 4000")
     })