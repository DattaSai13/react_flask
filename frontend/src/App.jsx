import { useState, useEffect } from 'react';
import { UserIcon, EnvelopeIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  // Fetch users on component mount
  useEffect(() => {
    setLoading(true);
    fetch(`${backendUrl}/api/users`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Handle form submission to add a user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Name and email are required');
      return;
    }
    setError('');
    fetch(`${backendUrl}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to add user');
        return response.json();
      })
      .then(data => {
        setUsers([...users, data.user]);
        setName('');
        setEmail('');
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <UserIcon className="h-6 w-6 mr-2 text-gray-500" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 mr-2 rounded"
          />
          <EnvelopeIcon className="h-6 w-6 mr-2 text-gray-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 mr-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded flex items-center">
            <PlusCircleIcon className="h-6 w-6 mr-1" /> Add User
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map(user => (
            <div key={user.id} className="border p-4 rounded flex items-center">
              <UserIcon className="h-6 w-6 mr-2 text-gray-500" />
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;