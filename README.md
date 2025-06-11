React + Flask User Management App 🚀

A simple web application with a React + Vite frontend and Flask backend, styled with Tailwind CSS and enhanced with Heroicons. The app allows users to view a list of users and add new users, with data stored in-memory on the backend.
✨ Features

Frontend: React + Vite for a fast, responsive UI with Heroicons for visual elements.
Backend: Flask API to manage user data (GET and POST endpoints).
Styling: Tailwind CSS for modern, responsive design.
Functionality:
📋 View a list of users (name and email) in a card layout with icons.
➕ Add new users via a form with icon-enhanced inputs and validation.


CORS: Enabled for seamless frontend-backend communication.

🛠 Tech Stack

Frontend: React, Vite, Tailwind CSS, Heroicons
Backend: Flask, Flask-CORS
Language: JavaScript (ES Modules), Python
Tools: npm, Python virtual environment

📂 Project Structure
react-flask-project/
├── backend/
│   ├── app.py              # Flask API with GET/POST endpoints
│   ├── venv/               # Python virtual environment
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component with form and user list
│   │   ├── index.css       # Tailwind CSS import
│   │   └── main.jsx        # React entry point
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration with Tailwind plugin
│   ├── package.json        # Node dependencies
│   └── tailwind.config.js  # Tailwind configuration
└── README.md               # Project documentation

📋 Prerequisites

Node.js (v16 or higher) and npm
Python (v3.8 or higher) and pip
Git (for cloning the repository)

⚙ Setup Instructions
1. Clone the Repository
git clone https://github.com/DattaSai13/react-flask-project.git
cd react-flask-project

2. Set Up the Backend

Navigate to the backend directory:cd backend


Create and activate a Python virtual environment:
Windows:python -m venv venv
.\venv\Scripts\activate


Linux/macOS:python -m venv venv
source venv/bin/activate




Install Python dependencies:pip install flask flask-cors


(Optional) Generate a requirements.txt:pip freeze > requirements.txt


Run the Flask server:python app.py


The backend will be available at http://127.0.0.1:5000.



3. Set Up the Frontend

Open a new terminal and navigate to the frontend directory:cd frontend


Install Node dependencies (including Heroicons):npm install @heroicons/react


Run the Vite development server:npm run dev


The frontend will be available at http://localhost:5173 (or another port if specified).



4. Test the Application

Ensure both the backend (http://127.0.0.1:5000) and frontend (http://localhost:5173) are running.
Open http://localhost:5173 in your browser.
Expected Output:
A form with user and email icons to add new users.
A list of default users (e.g., Alice Johnson, Bob Smith, Carol White) with icons.
Submit the form to add a new user, which appears instantly in the list.


Test the API directly at http://127.0.0.1:5000/api/users to view the JSON data.

🎮 Usage

View Users: The homepage displays a grid of user cards with names, emails, and user icons.
Add Users: Fill out the form with a name and email, then click "Add User". The new user is saved in-memory and displayed in the list.
Validation: Empty fields are rejected with an error message.
Note: Data is stored in-memory and resets when the Flask server restarts. For persistent storage, consider adding a database (e.g., SQLite).

🌐 API Endpoints

GET /api/users:
Returns a list of all users.
Example: [{"id": 101, "name": "Alice Johnson", "email": "alice@example.com"}, ...]


POST /api/users:
Adds a new user.
Request body: {"name": "John Doe", "email": "john@example.com"}
Response: {"message": "User added successfully", "user": {...}} (201) or error (400)



🐛 Troubleshooting

CORS Errors: Ensure Flask-CORS is installed and CORS(app) is in app.py.
Fetch Errors: Verify the backend is running and the frontend uses the correct URL (http://localhost:5000/api/users).
Tailwind/Heroicons Not Working: Confirm @import "tailwindcss"; is in src/index.css, @heroicons/react is installed, and restart the Vite server.
Port Conflicts: Change the port in app.py (e.g., app.run(port=5001)) or Vite’s vite.config.js (e.g., server: { port: 3000 }).

🚀 Future Enhancements

Add a database (e.g., SQLite, MongoDB) for persistent storage.
Implement user deletion and editing features.
Enhance form validation (e.g., email format).
Add authentication for secure API access.
Deploy the app (e.g., Flask with Gunicorn, frontend on Vercel/Netlify).

🤝 Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.

📬 Contact
For questions or feedback, reach out via GitHub Issues.
