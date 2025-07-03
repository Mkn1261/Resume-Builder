# 📄 Resume Builder

A full-stack **MERN** (MongoDB, Express, React, Node.js) application that lets users create, customize, and export professional resumes with multiple templates, AI-powered content enhancement, and shareable public links.

---

## ✨ Features

- **User Authentication** – Secure signup/login with JWT-based sessions and hashed passwords (bcrypt).
- **Multiple Resume Templates** – Choose from Classic, Modern, Minimal, and Minimal Image layouts.
- **Section Management** – Add and edit Personal Info, Professional Summary, Experience, Education, Projects, and Skills.
- **Color Customization** – Pick an accent color to personalize each resume.
- **AI-Powered Enhancements** – Improve your professional summary and job descriptions using OpenAI.
- **Resume Parsing** – Upload an existing resume (PDF) and extract text to speed up profile creation.
- **Image Uploads** – Profile photo uploads handled via Multer and stored on ImageKit.
- **Public Sharing** – Publish a resume and share it via a public, read-only link.
- **Dashboard** – View, manage, and organize all your saved resumes in one place.
- **Responsive UI** – Built with Tailwind CSS for a clean experience across devices.

---

## 🛠️ Tech Stack

**Frontend (`/client`)**
- React 19 + Vite 7
- Redux Toolkit (state management)
- React Router v7
- Tailwind CSS 4
- Axios
- React Hot Toast
- Lucide React (icons)
- react-pdftotext (resume text extraction)

**Backend (`/server`)**
- Node.js + Express 5
- MongoDB + Mongoose
- JSON Web Tokens (JWT) for auth
- bcrypt for password hashing
- Multer for file uploads
- ImageKit SDK for image hosting
- OpenAI SDK for AI-based content generation
- dotenv, cors

---

## 📁 Project Structure

```
Resume-Builder/
├── client/                     # React frontend
│   ├── src/
│   │   ├── app/                # Redux store & slices
│   │   ├── assets/             # Static assets & resume templates
│   │   ├── components/         # Reusable UI & template components
│   │   ├── configs/            # Axios API config
│   │   └── pages/               # Route-level pages (Home, Dashboard, Builder, Preview, Login)
│   └── package.json
│
└── server/                     # Express backend
    ├── configs/                 # DB, OpenAI, ImageKit, Multer configs
    ├── controllers/              # Route logic (user, resume, AI)
    ├── middlewares/              # JWT auth middleware
    ├── models/                   # Mongoose schemas (User, Resume)
    ├── routes/                   # API route definitions
    ├── server.js                 # App entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- An [OpenAI API key](https://platform.openai.com/) for AI features
- An [ImageKit](https://imagekit.io/) account for image uploads

### 1. Clone the repository
```bash
git clone https://github.com/Mkn1261/Resume-Builder.git
cd Resume-Builder
```

### 2. Setup the Backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/` with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
OPENAIBASE_URL=your_openai_base_url
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Run the server:
```bash
npm run server   # starts with nodemon (dev mode)
# or
npm start        # starts with node
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `client/` with:
```env
VITE_BASE_URL="http://localhost:3000"
```

Run the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port), with the API running at `http://localhost:3000`.

---

## 📡 API Overview

### User Routes (`/api/users`)
| Method | Endpoint    | Description              | Auth Required |
|--------|-------------|---------------------------|:--------------:|
| POST   | `/register` | Register a new user       | ❌ |
| POST   | `/login`    | Log in a user              | ❌ |
| GET    | `/data`     | Get logged-in user's data  | ✅ |
| GET    | `/resumes`  | Get all resumes for user   | ✅ |

### Resume Routes (`/api/resumes`)
| Method | Endpoint          | Description                    | Auth Required |
|--------|--------------------|---------------------------------|:--------------:|
| POST   | `/create`          | Create a new resume             | ✅ |
| PUT    | `/update`          | Update a resume (incl. image)   | ✅ |
| DELETE | `/delete/:resumeId`| Delete a resume                  | ✅ |
| GET    | `/get/:resumeId`   | Get a specific resume            | ✅ |
| GET    | `/public/:resumeId`| Get a publicly shared resume     | ❌ |

### AI Routes (`/api/ai`)
| Method | Endpoint                     | Description                              | Auth Required |
|--------|-------------------------------|--------------------------------------------|:--------------:|
| POST   | `/enhance-pro-sum`            | Enhance the professional summary text      | ✅ |
| POST   | `/enhance-job-description`    | Enhance an experience/job description       | ✅ |
| POST   | `/upload-resume`              | Parse an uploaded resume                    | ✅ |

> **Note:** Authenticated requests require an `Authorization` header containing the JWT token.

---

## 🖥️ Application Pages

- **Home** – Landing page with hero, features, and testimonials.
- **Login** – User authentication (sign in / sign up).
- **Dashboard** – View and manage all created resumes.
- **Resume Builder** – Step-by-step form to build out a resume (personal info, summary, experience, education, projects, skills, template & color selection).
- **Preview** – Live preview of the resume as it's being built.
- **Public View** – Shareable, read-only view of a published resume.

---

## 🗺️ Roadmap / Ideas for Contribution

- [ ] Export resumes as PDF/Word directly from the browser
- [ ] Add more resume templates
- [ ] Drag-and-drop section reordering
- [ ] Unit and integration tests

Contributions are welcome — feel free to open an issue or submit a pull request.

---

## 📝 License

This project is open source. Feel free to use and modify it for personal or educational purposes.

---

## 👤 Author

Built with ❤️ using the MERN stack.
