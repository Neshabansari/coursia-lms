#  Coursia – Learning Management System
A full-stack Learning Management System built using the MERN stack.  
This platform allows educators to create and manage courses, and students to enroll, purchase, and access learning content online.

---

## 🚀 Live Demo

🌐 Frontend (Vercel): https://bg-removal-dik8.vercel.app/

🔗 Backend API: https://lmsbackend-ecru.vercel.app/

---

## 📌 Project Overview

The LMS platform is designed to provide a seamless online learning experience.  
It supports role-based access control, secure authentication, course management, and online payment integration.

The system ensures secure data handling, scalable architecture, and responsive user experience.

---

## ✨ Key Features

- 🔐 User Authentication & Authorization (JWT-based)
- 👩‍🏫 Role-based Access (Student & Instructor)
- 📚 Course Creation & Management
- 💳 Secure Course Purchase (Stripe Integration)
- 📂 Protected Routes for Purchased Courses
- 📱 Fully Responsive UI
- 🌍 RESTful API Architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS / Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

### Payment Gateway
- Stripe API

### Deployment
- Vercel (Frontend)
- Render / Other Cloud Service (Backend)

---

## 🏗️ System Architecture

Client (React) → REST API (Express) → MongoDB Database  
Stripe API is integrated for secure payment processing.

---

## 📂 Project Structure
```
LMS/
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── services/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── config/
│
└── README.md
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Neshabansari/LMS
cd repository-name
```
### 2️⃣ Install Dependencies
frontend:
```
cd frontend
npm install
```

Backend:

```
cd backend
npm install
```

### 3️⃣ Configure Environment Variables

Create a .env file inside the backend folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
```

### 4️⃣ Run the Application

Backend:
```
npm start
```
Frontend:
```
npm run dev
```

### 🔐 Environment Variables Required

- MONGO_URI
- JWT_SECRET
- STRIPE_SECRET_KEY

### 🚀 Future Enhancements

- Course progress tracking
- Student dashboard analytics
- Instructor earnings dashboard
- Course ratings & reviews
- Email notifications

### 👩‍💻 Author
Neshab Alam Ansari

- GitHub: https://github.com/Neshabansari?tab=repositories
- LinkedIn: www.linkedin.com/in/neshab-ansari
