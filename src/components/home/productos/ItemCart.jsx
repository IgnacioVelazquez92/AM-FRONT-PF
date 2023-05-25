import React , {useContext} from 'react'

const ItemCart = () => {

  const cartStyles={
    maxWidth: "540px",
  }

  return (
    <div className="card mb-3" style={cartStyles.maxWidth}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button className='btn btn-dark'>+</button>
            <button className='btn btn-dark'>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart