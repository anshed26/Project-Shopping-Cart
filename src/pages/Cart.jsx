import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart, decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'

function Cart() {

  const cart=useSelector(state=>state.cart)

  const dispatch=useDispatch()

  const handleCheckout=()=>{
    alert("Order Placed Successfully.... Thank you for shopping with us...")
    dispatch(emptyCart())
  }
  return (
    <>
          <Header />

    
    {
      cart?.length>0?
      

        <div className='row'>
        <div className='col-lg-8'>
          <table className='table m-3 my-5'>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             { cart?.map((pro,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{pro?.title}</td>
                <td>
                  <img src={pro?.thumbnail} alt="" style={{ height: '50px', width: '50px' }} />
                </td>
                <td>
                  <button disabled={pro.quantity==1} className='btn' onClick={()=>dispatch(decrementQuantity(pro?.id))}>-</button>
                  <input type="text" value={pro?.quantity} className='bg-dark border-none ' style={{width:"30px"}} />
                  <button className='btn' onClick={()=>dispatch(incrementQuantity(pro?.id))}>+</button>

                </td>
                <td>$ {pro?.totalPrice}</td>
                <td>
                  <button className='btn btn-success' onClick={()=>dispatch(removeCartItem(pro?.id))}>
                  <i className="fa-solid fa-trash" ></i></button>
                  </td>
              </tr>
             ))
              
              }
            </tbody>
          </table>
          <div className='m-5'>
            <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'> EMPTY CART</button>
            <Link to={'/'} className='btn btn-warning' >SHOP MORE</Link>

          </div>
        </div>
        <div className='col-lg-4 text-center my-5 text-danger' >
          
              
                
                  <h1>Total items :{cart?.length}</h1>
                  
                  <h1>Total amount : ${cart?.reduce((sum,pro)=>sum+pro.totalPrice,0)}</h1>
                  
                
              
            
          <button className='btn btn-warning' onClick={handleCheckout}>CHECKOUT</button>

        </div>
      </div>
      :
      <div className='text-center my-5'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYCZqjx3wtKQdpp32WdFTJh3BgXjM6XQjoZyk6yxByw&s" style={{width:'250px'}} alt="" />
        <h1>Empty Cart</h1>
      </div>
      

      }

    </>
  )
}

export default Cart