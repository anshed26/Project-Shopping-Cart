import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

function Product() {

  const { id } = useParams()
  const [product, setProducts] = useState({})

  const wishlist = useSelector(state => state.wishlist)
    const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  // console.log(products);

  useEffect(() => {
    if (localStorage.getItem('allproducts')) {
      setProducts(JSON.parse(localStorage.getItem("allproducts")).find(pro => pro.id == id))
    }
  }, [])

  const handleWishlist = () => {
    const existingProduct = wishlist.find(pro => pro.id == product.id)
    if (existingProduct) {
      alert("Product already in your Wishlist... Add another")

    }
    else {
      dispatch(addToWishlist(product))

    }
  }

  const handleCart=()=>{

    const existingProduct=cart.find(pro=>pro.id==product.id)
      if(existingProduct){
        alert("product quantity incremented")
        dispatch(addToCart(product))
      }
      else{
        dispatch(addToCart(product))
      }

    }

  return (
    <>
      <Header />
      <div className="container my-5">
        <Row className="align-items-center">

          {/* Product Image */}
          <Col lg={6} className="text-center">
            <img className="img-fluid"
              style={{ maxHeight: '450px' }}
              src={product?.thumbnail}
              alt="Product"

            />
          </Col>

          {/* Product Details */}
          <Col lg={6}>

            <h1 className="fw-bold">
              {product?.title}
            </h1>



            <h2 className="text-success fw-bold">
              $ {product?.price}
            </h2>

            <p className="text-muted">
              {product?.description}
            </p>



            <Link  >
              <button onClick={handleWishlist} className="btn btn-outline-danger">

                <i className="fa-solid fa-heart m-2"></i>

              </button>
            </Link>
            <Link >

              <button onClick={handleCart} className="btn btn-outline-success m-2">

                <i className="fa-solid fa-cart-shopping m-2"></i>
              </button>
            </Link>

          </Col>

        </Row>
      </div>
    </>
  )
}

export default Product