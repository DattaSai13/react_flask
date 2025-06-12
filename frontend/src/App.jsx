import { useState, useEffect } from 'react'
import { UserIcon, EnvelopeIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [formError, setFormError] = useState('')

  // Fetch users on mount
  const fetchUsers = () => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        setError('Failed to fetch users')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError('Name and email are required')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Refresh user list
        fetchUsers()
        // Clear form
        setFormData({ name: '', email: '' })
      } else {
        setFormError(data.error || 'Failed to add user')
      }
    } catch (err) {
      setFormError('An error occurred while adding the user')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <UserIcon className="h-8 w-8 mr-2" /> User List
      </h1>

      {/* Add User Form */}
      <div className="w-full max-w-md mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <PlusCircleIcon className="h-6 w-6 mr-2" /> Add New User
        </h2>
        {formError && <p className="text-red-500 mb-4">{formError}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 flex items-center">
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <PlusCircleIcon className="h-5 w-5 mr-2" /> Add User
          </button>
        </form>
      </div>

      {/* User List */}
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-sm border flex items-start">
            <UserIcon className="h-6 w-6 text-gray-400 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-1" /> {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App