import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'


function Header({ insideHome }) {
    const wishlist=useSelector(state=>state.wishlist)
    const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  return (
    <>

      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid bg-success" style={{height:'60px'}}>
          <div>
            <Link to={'/'} className="text-decoration-none">
            <i className="fa-solid fa-shop" style={{ color: "blue" }}></i>
            <span className="navbar-brand fw-bold">SHOPIFY</span>
            </Link>
          </div>
          <form className="d-flex" role="search">
            {insideHome &&
              <input onChange={(e)=>dispatch(searchProducts(e.target.value))} className="form-control" style={{width:"300px"}} type="search" placeholder="Search products here" aria-label="Search" />

            }

          </form>
          <div className='d-flex gap-1'>
            <Link to={'/wishlist'}>
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
              <span className="badge text-bg-secondary">{wishlist?.length}</span>
            </Link>
            <Link to={'/cart'}>
              <i className="fa-solid fa-cart-shopping" style={{ color: "blue" }}>
              </i><span className="badge text-bg-secondary">{cart?.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header