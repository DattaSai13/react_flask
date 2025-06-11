# 👥 React + Flask User Management App 🚀

A simple full-stack web application featuring a **React + Vite** frontend and a **Flask** backend, styled beautifully with **Tailwind CSS** and **Heroicons**. It allows users to view and add users with real-time updates and sleek UI.

---

## ✨ Features

- **Frontend**: Built with React + Vite for fast development and responsive UI.
- **Backend**: Flask REST API to manage user data (`GET` and `POST` support).
- **Styling**: Tailwind CSS for sleek and responsive design.
- **Icons**: Heroicons for modern UI experience.
- **Functionality**:
  - 📋 View a list of users (name and email) in styled cards.
  - ➕ Add new users with form validation and real-time updates.
- **CORS**: Enabled via Flask-CORS for seamless integration.

---

## 🛠 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React, Vite, Tailwind CSS, Heroicons |
| Backend   | Flask, Flask-CORS      |
| Language  | JavaScript, Python     |
| Tools     | npm, pip, venv, Git    |

---

## 📁 Project Structure

```
react-flask-project/
├── backend/
│   ├── app.py              # Flask API with user endpoints
│   ├── venv/               # Python virtual environment
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── index.css       # Tailwind CSS import
│   │   └── main.jsx        # React app entry point
│   ├── index.html          # Root HTML file
│   ├── vite.config.js      # Vite configuration
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind CSS configuration
└── README.md               # Documentation
```

---

## ⚙ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/DattaSai13/react-flask-project.git
cd react-flask-project
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
# Activate virtual environment
# Windows:
.env\Scriptsctivate
# macOS/Linux:
source venv/bin/activate

pip install flask flask-cors
# (Optional)
pip freeze > requirements.txt

python app.py
# Running at http://127.0.0.1:5000
```

### 3. Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm install @heroicons/react
npm run dev
# Running at http://localhost:5174
```

---

## 🧪 Testing the App

- Open [http://localhost:5174](http://localhost:5174)
- Add a user via the form
- User appears instantly in the user list
- Backend endpoint: [http://127.0.0.1:5000/api/users](http://127.0.0.1:5000/api/users)

---

## Snapshots 
- frontend:  ![Screenshot 2025-06-11 235105](https://github.com/user-attachments/assets/27cfd689-995a-49f8-86f8-0ef1ace8c325)
- backend:   ![Screenshot 2025-06-11 234905](https://github.com/user-attachments/assets/137d5173-1300-4d89-813d-ba00f79cad0d)



## 🌐 API Endpoints

- **GET /api/users** – List all users
- **POST /api/users** – Add a new user
  - Example body: `{ "name": "Jane Doe", "email": "jane@example.com" }`

---

## 🐛 Troubleshooting

- **CORS Error**: Ensure `flask-cors` is installed and `CORS(app)` is in `app.py`
- **Fetch Error**: Confirm backend is running and URL is correct in React
- **Tailwind Not Working**: Ensure Tailwind is configured in `index.css` and Vite restarted
- **Port Conflicts**: Change ports in `vite.config.js` or `app.py`

---

## 🚀 Future Enhancements

- Add persistent DB (SQLite, MongoDB, etc.)
- Edit & delete users
- Email validation + better form error handling
- Auth system (login, sessions)
- Deployment: Vercel (frontend) + PythonAnywhere/Render (backend)

---

## 🤝 Contributing

```bash
# Fork the repo
# Create a new feature branch
git checkout -b feature/my-new-feature
# Commit your changes
git commit -m "Add my new feature"
# Push and create a pull request 🚀
```

---


## 📬 Contact

- GitHub Issues for bugs/suggestions
- Email: [datta81069@gmail.com]

---

> “Build fast. Deploy faster. React + Flask FTW 💻🔥”
