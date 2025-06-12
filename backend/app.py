from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["https://react-flask-project.vercel.app", "http://localhost:5173"]}})  # Allow Vercel and local dev

# Default user data (in-memory storage)
users = [
    {"id": 101, "name": "Alice Johnson", "email": "alice@example.com"},
    {"id": 102, "name": "Bob Smith", "email": "bob@example.com"},
    {"id": 103, "name": "Carol White", "email": "carol@example.com"}
]

# Counter for generating unique IDs
user_id_counter = 104

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def add_user():
    global user_id_counter
    data = request.get_json()
    
    # Validate input
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({"error": "Name and email are required"}), 400
    
    if not data['name'].strip() or not data['email'].strip():
        return jsonify({"error": "Name and email cannot be empty"}), 400

    # Create new user
    new_user = {
        "id": user_id_counter,
        "name": data['name'],
        "email": data['email']
    }
    users.append(new_user)
    user_id_counter += 1

    return jsonify({"message": "User added successfully", "user": new_user}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)