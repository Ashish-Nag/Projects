const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const lodash = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Global variables 
const homeContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quia possimus, accusantium eveniet ratione voluptas aliquid obcaecati architecto fugiat facere nostrum officia quod similique quasi alias? Ratione nam fugit minima adipisci pariatur quia assumenda debitis nihil aspernatur, itaque dicta iste?";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est consectetur corrupti error, ipsum dolore aut laboriosam voluptatem odio perspiciatis voluptatibus modi minus labore quam veniam eligendi asperiores quidem nulla!";
const contactContent = "something about my contacts Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aperiam veniam nihil debitis dolores sapiente ex quo odio? Accusantium, sunt!";
const posts = [];
// Routes
app.get("/", (req, res) => {
    res.render('home', { content: homeContent, blogPosts: posts });
});

app.get("/about", (req, res) => {
    res.render('about', { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
    res.render('contact', { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.get("/posts/:postTitle", (req, res) => {
    let requestedPost = lodash.lowerCase(req.params.postTitle);
    posts.forEach((post) => {
        if (requestedPost == post.title.toLowerCase()) {
            res.render("singlePost", { postObject: post });
        }
    });
});

app.post("/", (req, res) => {
    let post = {
        'title': req.body.postTitle,
        'body': req.body.postBody
    }
    posts.push(post);
    res.redirect("/");
})

app.listen(300, () => {
    console.log("the app has started in the port 300");
})