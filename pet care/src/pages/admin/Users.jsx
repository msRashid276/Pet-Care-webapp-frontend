import React, { useContext, useEffect, useState } from "react";
import {
  userDeleteManagementAdmin,
  userManagementAdmin,
  userUpdateManagementAdmin,
} from "../../services/api/admin/UserManagement";
import AuthContext from "../../providers/AuthProvider";
import UserCard from "../../components/admin-shop-shared/UserCard";


import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from "../../components/admin/UpdateUserModal";



const Users = () => {


  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedUser,setSelectedUser] = useState(null);
  const[isModalOpen,setIsModalOpen] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    // Fetching User
    const fetchUsers = async () => {
      if (auth.role === "ADMIN") {
        const response = await userManagementAdmin(auth.token);
        setUsers(response.data);
      } else {
        console.error("You are not authorized to view this page");
      }
    };
    fetchUsers();
  }, [auth]);


  // Deleting User
  const handleDelete = async (userId) => {
    if (auth.role === "ADMIN") {
      const response = await userDeleteManagementAdmin(auth.token,userId);
      console.log("responseDelete", response.data);
      setUsers(users.filter((user)=>user.id != userId))
    } else {
      console.error("You are not authorized to view this page");
    }
  };


  // updating User
  const handleUpdate = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  };

  const handleSave = async (updatedUser) => {
    if (auth.role === "ADMIN") {
      const response = await userUpdateManagementAdmin(auth.token,updatedUser,updatedUser.id);
      console.log("responseDelete", response.data);
      setUsers(users.map((user)=>user.id===updatedUser.id ? updatedUser : user))
      setIsModalOpen(false);
    } else {
      console.error("You are not authorized to view this page");
    }
  }


  

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4 items-center gap-3">
        <button className="bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 flex items-center"
        onClick={()=>navigate("/admin/addUser")}
        >
        <HiUserAdd className="mr-1" size={20}/>
          Add User 
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} onUpdate={()=>handleUpdate(user)} />
        ))}
      </div>
          {isModalOpen && selectedUser && (
            <UpdateUserModal user={selectedUser} onSave={handleSave} onClose={() => setIsModalOpen(false)}/>
          )}

    </div>
  );
};

export default Users;
