import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
    const wishlist=useSelector(state=>state.wishlist)
        const cart = useSelector(state => state.cart)
    
    const dispatch=useDispatch()
     const handleCart=(product)=>{
    
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
      <div className='row m-5'>
       {
       wishlist?.length>0?
        
       wishlist?.map(pro=>(
         <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pro?.thumbnail} />
            <Card.Body>
              <Card.Title className='text-center'>{pro?.title}</Card.Title>
              <Card.Text>

              </Card.Text>

            </Card.Body>
            <button className="btn btn-success " onClick={()=>dispatch(handleCart(pro))}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

            <button onClick={()=>dispatch(removeFromWishlist(pro?.id))} className="btn btn-outline-danger">
              <i class="fa-solid fa-heart-circle-minus"></i>

            </button>
          </Card>
        </div>
       ))
        :
        <div className='text-center my-5'> 
          <img src="https://sppvinayak.com/uploads/empty_wishlist.png" style={{width:"300px"}} alt="" />

        </div>
        
        }
      </div></>
  )
}

export default Wishlist