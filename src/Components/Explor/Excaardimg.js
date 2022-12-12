import React from 'react'
import { Link } from 'react-router-dom'

const Excaardimg = (props) => {
  return (
    <Link to={`/products/${props.name}`} className="card-2 col-md-4  mb-2">
            <img src={props.img} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">{props.name}</h5>
            </div>
          </Link>
  )
}

export default Excaardimg
