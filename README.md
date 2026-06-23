# 🎓 Students API

A simple and clean REST API for managing students,
built with Node.js and Express.js.

Developed by Mahdi Keshavarz

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

git clone https://github.com/mahdikeshavarz1383/students-api.git
cd students-api
npm install
node app.js

Server runs on: http://localhost:3000

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get a student by ID |
| POST | /students | Add a new student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

---

## 📥 Request Examples

### Add a new student (POST)
{
  "name": "Ali",
  "grade": 18
}

### Update a student (PUT)
{
  "name": "Ali",
  "grade": 20
}

### Response (Success)
{
  "message": "updated",
  "student": {
    "id": 1,
    "name": "Ali",
    "grade": 20
  }
}

---

## ✅ Validation Rules

- id must be a number → 400 Bad Request
- Student not found → 404 Not Found
- Missing name or grade in POST → 400 Bad Request
- Missing both name and grade in PUT → 400 Bad Request

---

## ⚙️ Tech Stack

- Node.js
- Express.js

---

## 📄 License

This project is open source and available under
the MIT License.
Feel free to use, modify, and distribute it freely.

---

## 👨‍💻 Author

Mahdi Keshavarz
Computer Engineering Student
Islamic Azad University of Qazvin

GitHub: github.com/mahdikeshavarz1383
Email: mahdikeshavarz1383m@gmail.com
