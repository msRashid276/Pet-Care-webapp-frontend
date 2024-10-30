import React, { useContext, useEffect, useState } from "react";
import {
  userDeleteManagementAdmin,
  userManagementAdmin,
  userSearchManagementAdmin,
  userUpdateManagementAdmin,
} from "../../services/api/admin/UserManagement";
import AuthContext from "../../providers/AuthProvider";
import UserCard from "../../components/admin-shop-shared/UserCard";

import { HiUserAdd, HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from "../../components/admin/UpdateUserModal";



const Users = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchKeyword,setSearchKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching User
    fetchUsers();
  }, [auth]);

  const fetchUsers = async () => {
    if (auth.role === "ADMIN") {
      const response = await userManagementAdmin(auth.token);
      setUsers(response.data);
    } else {
      console.error("You are not authorized to view this page");
    }
  };

  // Deleting User
  const handleDelete = async (userId) => {
    if (auth.role === "ADMIN") {
      const response = await userDeleteManagementAdmin(auth.token, userId);
      console.log("responseDelete", response.data);
      setUsers(users.filter((user) => user.id != userId));
    } else {
      console.error("You are not authorized to view this page");
    }
  };

  // updating User
  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedUser) => {
    if (auth.role === "ADMIN") {
      const response = await userUpdateManagementAdmin(
        auth.token,
        updatedUser,
        updatedUser.id
      );
      console.log("response update", response.data);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setIsModalOpen(false);
    } else {
      console.error("You are not authorized to view this page");
    }
  };


  const handleSearch = async (e) => {
    e.preventDefault();
      setSearchKeyword(e.target.value);
  
      if(searchKeyword.trim()===""){
        fetchUsers();
      }else{
        if (auth.role === "ADMIN") {
          console.log(searchKeyword);
          const response = await userSearchManagementAdmin(auth.token, searchKeyword);
          console.log("responseDelete", response.data);
          setUsers(response.data);
    
        } else {
          console.error("You are not authorized to view this page");
        }
      } 
  }




  return (
    <div className="p-6">
      <div className="flex justify-between mb-4 items-center gap-3 max-md:flex-col">
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchKeyword}
            onChange={handleSearch}
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
          />
        </div>

        <div>
          <button
            className="bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 flex items-center"
            onClick={() => navigate("/admin/addUser")}
          >
            <HiUserAdd className="mr-1" size={20} />
            Add User
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onUpdate={() => handleUpdate(user)}
          />
        ))}
      </div>
      {
      isModalOpen && selectedUser && (
        <UpdateUserModal
          user={selectedUser}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Users;
