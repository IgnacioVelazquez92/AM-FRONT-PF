import React from 'react'
import {Link} from 'react-router-dom'
const AdminProducts = () => {
  return (
    <div>
      <Link to='/admin-products' className="btn nav-link position-relative border-0">
        <i className="bi bi-shop h3"></i>
        <span>Productos</span>
      </Link>
    </div>
  )
}

export default AdminProducts
