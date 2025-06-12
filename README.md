# 👥 React + Flask User Management App 🚀

A full-stack web application built with **React + Vite** for the frontend and **Flask** for the backend, styled beautifully with **Tailwind CSS** and **Heroicons**. The app allows users to view and add users dynamically, with real-time frontend-backend integration.

---

## 📍 Deployed URLs

- **Frontend**: [https://react-flask-nine.vercel.app](https://react-flask-nine.vercel.app)
- **Backend**: [https://react-flask-backend-froi.onrender.com](https://react-flask-backend-froi.onrender.com)

---

## ✨ Features

- 🚀 Fast, modern UI with **React + Vite**
- 📋 View users in a responsive **card layout** with icons
- ➕ Add new users with **form validation**
- 🎨 Styled using **Tailwind CSS** & **Heroicons**
- 🔄 Seamless **frontend-backend communication** with CORS enabled

---

## 🛠 Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React, Vite, Tailwind CSS, Heroicons |
| Backend   | Flask, Flask-CORS             |
| Language  | JavaScript (ES Modules), Python |
| Tools     | npm, pip, Git, Vercel, Render |

---

## 📂 Project Structure

```
react_flask/
├── backend/
│   ├── app.py              # Flask API with user endpoints
│   ├── requirements.txt    # Python dependencies
│   └── venv/               # Python virtual environment
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── index.css       # Tailwind CSS import
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   ├── package.json        # Node dependencies
│   └── tailwind.config.js  # Tailwind configuration
└── README.md               # Project documentation
```

---

## 📋 Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- Git & pip

---

## ⚙ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/DattaSai13/react_flask.git
cd react_flask
```

### 2. Set Up the Backend

```bash
cd backend
python -m venv venv

# Windows
.env\Scriptsctivate

# macOS/Linux
source venv/bin/activate

pip install flask flask-cors gunicorn
python app.py  # Run locally
```

Backend is served at [http://127.0.0.1:5000](http://127.0.0.1:5000)

### 3. Set Up the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend is served at [http://localhost:5173](http://localhost:5173)

---

## 🔗 Integration & Environment Variables

### Frontend

In `App.jsx`, ensure:

```js
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
```

Set Vercel ENV variable:

- `VITE_BACKEND_URL=https://react-flask-backend-froi.onrender.com`

### Backend

Enable CORS in `app.py`:

```python
CORS(app, resources={r"/api/*": {"origins": ["https://react-flask-nine.vercel.app", "http://localhost:5173"]}})
```

Push changes and redeploy to Render.

---

## 🚀 Deploy to Production

### Frontend: Vercel

- Connect GitHub repository
- Root directory: `frontend/`
- Framework: Vite
- Build: `npm run build`
- Output: `dist`
- Environment variable: `VITE_BACKEND_URL=https://react-flask-backend-froi.onrender.com`

Deploy: [https://react-flask-nine.vercel.app](https://react-flask-nine.vercel.app)

### Backend: Render

- Connect GitHub repo
- Root directory: `backend/`
- Runtime: Python 3
- Build: `pip install -r requirements.txt`
- Start: `gunicorn --bind 0.0.0.0:$PORT app:app`

Deploy: [https://react-flask-backend-froi.onrender.com](https://react-flask-backend-froi.onrender.com)

---

## ✅ Testing the App

1. Visit [https://react-flask-nine.vercel.app](https://react-flask-nine.vercel.app)
2. Add a user via the form with name and email
3. View users listed with icons
4. View API data: [https://react-flask-backend-froi.onrender.com/api/users](https://react-flask-backend-froi.onrender.com/api/users)

---

## 🌐 API Endpoints

- **GET /api/users** – List all users
- **POST /api/users** – Add a user

Example POST body:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 🐛 Troubleshooting

| Issue            | Fix                                                                 |
|------------------|----------------------------------------------------------------------|
| CORS Errors      | Ensure `CORS(app, ...)` is set correctly                            |
| Fetch Fails      | Ensure `VITE_BACKEND_URL` is correct on Vercel                      |
| 502/404 on Render| Check `gunicorn` command and Flask app routes                       |
| Vercel errors     | Check node version in `package.json`, rebuild from clean cache      |
| Render delay     | Free tier apps may spin down — wait 10–20 seconds                   |

---

## 🚀 Future Enhancements

- Add a database (e.g., SQLite, MongoDB)
- Add delete/edit user features
- Add form validation (email regex)
- Secure APIs with authentication
- Deployment enhancements

---

## 🤝 Contributing

```bash
# Fork the repo
# Create feature branch
git checkout -b my-feature
# Make changes and commit
git commit -m "Add feature"
# Push and open PR
```

---


## 📬 Contact

- GitHub: [DattaSai13](https://github.com/DattaSai13)
- Issues tab for bugs, suggestions, and feedback

---

> “Build fast. Connect easily. React + Flask = ❤️”
