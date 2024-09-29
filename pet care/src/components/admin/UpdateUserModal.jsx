import React from 'react'
import { useState } from 'react';

const UpdateUserModal = ({user,onSave,onClose}) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password,setPassword] = useState(user.password)
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
      const updatedUser = { ...user, firstName, lastName, email, role };
      onSave(updatedUser);
  };


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Update User</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
  )
}

export default UpdateUserModal