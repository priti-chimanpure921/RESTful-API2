# 🛠️ RESTful-API2

A simple RESTful API-style web application built using Node.js and Express.js, demonstrating CRUD operations (Create, Read, Update, Delete) on a blog list with server-side rendering using EJS templates.

This project helps you learn backend fundamentals like routing, forms, RESTful URL structures, method override, and rendering dynamic pages.

# 🚀 Features

✔ Full CRUD functionality for blogs

✔ Dynamic rendering with EJS templates

✔ Server-side routing using Express

✔ Create, view, update, and delete blog posts

✔ Uses method-override to handle PUT & DELETE in HTML forms

✔ Unique IDs generated using crypto.randomUUID()

# Concepts Covered

This project demonstrates:

Building a backend server using Express.js

RESTful URL design (e.g., /blogs, /blogs/:id)

Rendering server pages with EJS

Handling form data using express.urlencoded()

Using method-override to support PUT/PATCH & DELETE from forms

Static file serving

Array manipulation for data storage

# 📦 Technologies Used

Node.js – JavaScript runtime

Express.js – Fast, minimal web framework

EJS – Templating engine

method-override – Enable PUT/PATCH/DELETE in HTML forms

crypto – Generate unique IDs

# 📄 What You Can Do

<h3>📌 View All Blog Posts</h3>

GET /blogs

<h3>✏️ Create New Blog Post</h3>

GET /blogs/new → Show form

POST /blogs → Create post

<h3>🔍 View a Single Blog</h3>

GET /blogs/:id

<h3>✏️ Edit a Blog</h3>

GET /blogs/:id/update → Show edit form

PATCH /blogs/:id → Update content

<h3>❌ Delete a Blog</h3>

DELETE /blogs/:id

<b>All routing follows REST-style URL patterns.</b>
