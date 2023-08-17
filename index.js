const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to my website!");
});

app.get('/about', (req, res) => {
  res.send("This is the about page!");
});

app.get('/contact', (req, res) => {
  res.send("Contact us at contact@example.com");
});

app.get('/blog', (req, res) => {
  const blogPosts = [
    { title: "My First Post", content: "This is my very first blog post." },
    { title: "Node.js Express", content: "Exploring the power of Node.js and Express." }
  ];
  res.json(blogPosts);
});

app.get('/products', (req, res) => {
  const products = [
    { name: "Product A", price: 19.99 },
    { name: "Product B", price: 29.99 }
  ];
  res.json(products);
});

app.get('/services', (req, res) => {
  res.send("We offer a variety of services.");
});

app.get('/portfolio', (req, res) => {
  const portfolioItems = [
    { title: "Project 1", description: "A web application project." },
    { title: "Project 2", description: "Mobile app development." }
  ];
  res.json(portfolioItems);
});

app.get('/team', (req, res) => {
  const teamMembers = [
    { name: "John Doe", role: "Developer" },
    { name: "Jane Smith", role: "Designer" }
  ];
  res.json(teamMembers);
});

app.get('/faq', (req, res) => {
  const questions = ["What is your return policy?", "How can I contact support?"];
  res.json(questions);
});

app.get('/specials', (req, res) => {
  res.send("Check out our limited-time discounts!");
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
