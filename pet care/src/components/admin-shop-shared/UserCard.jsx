import React from 'react'

const UserCard = (props) => {

    const {user,onDelete,onUpdate} = props;

    const handleDelete = () =>{
        if(window.confirm(`Are you sure you want to delete user ${user.firstName}`)){
                onDelete(user.id);
        }
    }

    const handleUpdate = () =>{
        if(window.confirm(`Are you sure you want to update the user ${user.firstName}`)){
                onUpdate(user);
        }
    }


  return (
    <div className='bg-white shadow-lg rounded-lg p-4 border border-gray-200'>
        <h3 className='text-lg font-semibold text-gray-800'>{user.firstName} {user.lastName}</h3>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600' onClick={handleUpdate}>
                Update
            </button>
            <button className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600' onClick={handleDelete}>
                Delete
            </button>
        </div>
    </div>
  )
}

export default UserCard