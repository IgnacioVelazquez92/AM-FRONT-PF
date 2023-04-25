import React, {useState} from 'react'

// const [count,setCount]=useState(0)

const Favoritos = () => {
  return (
    <div>
      <button type="button" className="btn nav-link position-relative">
        <i className="bi bi-star h3"></i>
        Favoritos
        <span className="position-absolute  top-50 start-75 translate-middle badge rounded-pill bg-danger">
          1
        </span>
      </button>

    </div>
  )
}

export default Favoritos