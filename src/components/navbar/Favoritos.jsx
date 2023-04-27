import React, {useState} from 'react'

const Favoritos = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <button type="button" className="btn nav-link position-relative" onClick={() => setCount(count => count + 1)}>
        <i className="bi bi-star h3"></i>
        <span>Favoritos</span> 
        <span className="position-absolute  top-50 start-75 translate-middle badge rounded-pill bg-danger">
        {count}
        </span>
      </button>

    </div>
  )
}

export default Favoritos