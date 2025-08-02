
# 📝 Notes REST API (MERN Backend Project)

This is a simple and secure **Notes REST API** built with **Node.js, Express.js, MongoDB, and JWT**. It allows users to register, login, and manage personal notes securely.

### 🚀 Live API Base URL
👉 https://notes-rest-api-ecie.onrender.com/

---

## 📌 API Endpoints

### 🧑 User Authentication

| Method | Endpoint             | Description                      | Auth Required |
|--------|----------------------|----------------------------------|---------------|
| POST   | `/api/auth/register` | Register a new user              | ❌ No         |
| POST   | `/api/auth/login`    | Login and get a JWT token        | ❌ No         |

---

### 📝 Notes (Protected Routes)

| Method | Endpoint          | Description                       | Auth Required |
|--------|-------------------|-----------------------------------|---------------|
| GET    | `/api/notes`      | Get all notes of logged-in user  | ✅ Yes        |
| POST   | `/api/notes`      | Create a new note                | ✅ Yes        |
| PUT    | `/api/notes/:id`  | Update an existing note by ID    | ✅ Yes        |
| DELETE | `/api/notes/:id`  | Delete a note by ID              | ✅ Yes        |

---

## 📂 Sample JSON Format

### ➕ Register User
```json
{
  "name": "Shiva Kumar",
  "email": "shiva@example.com",
  "password": "Shiva@123"
}
```

### 🔑 Login
```json
{
  "email": "shiva@example.com",
  "password": "Shiva@123"
}
```

---

### 🔐 Auth Header for Protected Routes
```json
{
  "token": "your-jwt-token"
}
```

---

## 💾 Sample Data

### 👤 Users

```json
[
  {
    "_id": "64ee2b71a889ab98d1f001a1",
    "name": "Shiva Kumar",
    "email": "shiva@example.com",
    "password": "$2a$10$fakehashedpassword1"
  },
  {
    "_id": "64ee2b71a889ab98d1f001a2",
    "name": "Rahul Mehta",
    "email": "rahul@example.com",
    "password": "$2a$10$fakehashedpassword2"
  }
]
```

### 📝 Notes

```json
[
  {
    "title": "React Roadmap",
    "content": "Learn JSX, hooks, context, and routing.",
    "userId": "64ee2b71a889ab98d1f001a1"
  },
  {
    "title": "MongoDB Setup",
    "content": "Finish MongoDB Atlas setup and link to backend.",
    "userId": "64ee2b71a889ab98d1f001a1"
  },
  {
    "title": "Git Commands",
    "content": "git init, add, commit, push basics",
    "userId": "64ee2b71a889ab98d1f001a2"
  }
]
```

---

## ✅ Recent Update

> 🟢 **Commit:** Added `/` route to display all notes and users in root path  
> 🗓️ **Date:** July 31, 2025  
> 🔗 Endpoint: [GET /](https://notes-rest-api-ecie.onrender.com/)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT-based authentication
- **Hosting:** Render (Node API hosting)
- **Tools:** Postman, MongoDB Compass, dotenv

---

## 👨‍💻 Developer

**Name:** Shiva Kumar  
**Email:** gshiva0018@gmail.com  
**GitHub:** [shivakumargattu](https://github.com/shivakumargattu)

---
