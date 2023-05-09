import React from 'react';
import {Link} from 'react-router-dom';

const AdminUser = () => {
  return (
    <div>
        <Link to="/admin-user" className="btn nav-link position-relative border-0">
        <i className="bi bi-people-fill h3"></i>
        <span>Usuarios</span>
      </Link>
    </div>
  )
}

export default AdminUser