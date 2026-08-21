# Abhinav Reddy — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my technical skills, projects, experience, achievements, and journey as a Computer Science student.

The portfolio focuses on my interests across **Software Development, Artificial Intelligence, Full-Stack Development, Data & Databases, Cloud & DevOps, and Problem Solving**.

---

## 🌐 Live Demo

**Live Portfolio:** Coming Soon

**GitHub Repository:**
https://github.com/abhinavreddy6342/abhinav-portfolio

---

## 👨‍💻 About

I am a Computer Science student with a strong interest in building software, solving problems, and exploring modern technologies across the field of computer science.

I enjoy working across:

* Software Development
* Artificial Intelligence
* Full-Stack Development
* Data & Databases
* Cloud & DevOps
* Problem Solving

My goal is to become a versatile **Software Engineer** capable of learning new technologies, designing reliable solutions, and contributing to meaningful products across different areas of technology.

---

## ✨ Features

* Modern futuristic dark-themed interface
* Fully responsive design
* Smooth scrolling navigation
* Animated section transitions
* Interactive hover effects
* Subtle cyan particle background animation
* About Me section
* Technical Skills section
* Projects showcase
* Experience section
* Achievements section
* Functional contact form
* REST API integration
* MongoDB database integration
* Resume download
* Component-based React architecture

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Vite
* Tailwind CSS
* Framer Motion
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API
* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* VS Code
* npm

---

## 🏗️ Architecture

The portfolio follows a separate frontend and backend architecture.

```text
                    ┌─────────────────────┐
                    │    Portfolio UI     │
                    │   React Frontend    │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │   Contact Messages  │
                    └─────────────────────┘
```

---

## 📂 Project Structure

```text
abhinav-portfolio/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── animations/
│   │   ├── components/
│   │   ├── data/
│   │   ├── sections/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 📬 Contact Form

The portfolio includes a functional contact form that communicates with the backend API.

### Request Flow

```text
Visitor
   ↓
Contact Form
   ↓
React Frontend
   ↓
Express REST API
   ↓
Mongoose
   ↓
MongoDB
```

Contact messages are submitted through:

```text
POST /api/contact
```

The backend validates and stores the submitted information in MongoDB.

---

## 🔐 Environment Variables

Sensitive configuration is managed using environment variables.

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

The `.env` file is excluded from version control through `.gitignore`.

**No database credentials or other private configuration are included in this repository.**

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/abhinavreddy6342/abhinav-portfolio.git
cd abhinav-portfolio
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Create your `.env` file and configure the required environment variables.

### 3. Start the backend

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 4. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Start the frontend

```bash
npm run dev
```

---

## 🧪 Production Build

The frontend can be built for production using:

```bash
cd frontend
npm run build
```

The optimized production files are generated in:

```text
frontend/dist/
```

---

## 🎨 Design & User Experience

The portfolio uses a dark futuristic visual language designed to remain professional while giving the website a distinctive identity.

Key design elements include:

* Dark interface
* Cyan accent system
* Subtle glowing effects
* Smooth motion
* Interactive elements
* Minimal particle background
* Responsive layouts
* Clear section hierarchy

The particle animation is intentionally subtle so that it enhances the visual experience without distracting from the content.

---

## 📌 Sections

The portfolio currently includes:

### About

Introduction, technical interests, and career direction.

### Skills

Programming languages, frameworks, tools, databases, cloud technologies, and other technical skills.

### Projects

Selected software, AI, and full-stack projects.

### Experience

Internships, development experience, and relevant professional activities.

### Achievements

Hackathons, competitions, certifications, and other accomplishments.

### Contact

A functional contact form connected to the backend and MongoDB.

---

## 💡 What This Project Demonstrates

This project demonstrates practical experience with:

* React-based frontend development
* Component-driven architecture
* Responsive web design
* UI animations and interactions
* REST API integration
* Node.js backend development
* Express.js API development
* MongoDB database integration
* Mongoose data modeling
* Form handling
* Environment variable management
* Git and GitHub
* Production builds and deployment workflows

---

## 🔮 Future Improvements

Possible future improvements include:

* Advanced project filtering
* Blog or technical articles section
* More interactive project demonstrations
* Improved accessibility
* Analytics integration
* Additional backend features
* Continuous deployment improvements

---

## 👤 Developer

**Gogulamudi Abhinav Reddy**

Computer Science Student

**Interests:**
Software Development • Artificial Intelligence • Full-Stack Development • Cloud & DevOps • Data & Databases • Problem Solving

---

## 📄 License

Copyright © 2026 Gogulamudi Abhinav Reddy.

This repository is provided for portfolio and demonstration purposes. No license is granted for redistribution, modification, or commercial reuse without permission.
