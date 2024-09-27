import React from 'react'
import { userManagementAdmin } from '../../services/api/admin/UserManagement'

const Users = () => {

  const response = userManagementAdmin()

  return (
    <div>Users</div>
  )
}

export default Users