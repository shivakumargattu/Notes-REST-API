# 📝 Notes REST API

A secure and scalable RESTful API for managing personal notes with user authentication and CRUD operations. Built using **Node.js**, **Express.js**, and **MongoDB**, this backend project demonstrates real-world API architecture and JWT-based access control.

## 🔗 Live API

🌐 **Deployed at:**  
👉 [https://notes-rest-api-ecie.onrender.com](https://notes-rest-api-ecie.onrender.com)

---

## 🚀 Features

- JWT-based user authentication  
- Full CRUD operations for Notes  
- Only authenticated users can manage their own notes  
- Modular folder structure (MVC pattern)  
- MongoDB Atlas with Mongoose  
- Environment variable support  

---

---

## ⚙️ Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT + bcryptjs**  
- **Postman / Thunder Client**  
- **Render (Deployment)**  

---

### 📌 API Endpoints

#### 🧑 User Authentication Routes

| Method | Endpoint             | Description                      | Authentication |
|--------|----------------------|----------------------------------|----------------|
| POST   | /api/auth/register   | Register a new user              | ❌ No          |
| POST   | /api/auth/login      | Login and receive JWT token      | ❌ No          |

---

#### 📝 Notes Routes (Protected with JWT Token)

| Method  | Endpoint           | Description                                  | Authentication |
|---------|--------------------|----------------------------------------------|----------------|
| GET     | /api/notes          | Get all notes for the logged-in user         | ✅ Yes         |
| POST    | /api/notes          | Create a new note                            | ✅ Yes         |
| PUT     | /api/notes/:id      | Update a note by its ID                      | ✅ Yes         |
| DELETE  | /api/notes/:id      | Delete a note by its ID                      | ✅ Yes         |

---

### 🔐 Sample JWT Header (Required for Notes Routes)

```json
{
  "token": "your-jwt-token"
}
```

## 📦 Installation

```bash
git clone https://github.com/shivakumargattu/notes-api.git
cd notes-api
npm install

# Setup .env
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret

# Run the server
npm run dev
