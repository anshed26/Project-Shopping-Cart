import React from 'react'
import {  Row, Col, Form, Button } from 'react-bootstrap'

function Footer() {
  return (
    
      <div className="bg-success text-light pt-5 pb-3 mt-auto">
      <div className='container'>
        <div className="row gy-4">
          
         
          <div  className="col-lg-3 col-md-6" >
            <div className="d-flex align-items-center mb-3">
              <img 
                src='https://cdn-icons-png.flaticon.com/512/4502/4502964.png' 
                alt="Shopify Logo" 
                style={{ height: '30px',  }} 
              />
              <span className="ms-2 fs-4 fw-bold">Shopify</span>
            </div>
            <p className="text-primary small mb-3">
              Your ultimate destination for trendy fashion, electronics, lifestyle essentials, and unbeatable daily deals. Shop smart, live better.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light text-decoration-none"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-light text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-light text-decoration-none"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-light text-decoration-none"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className='col-lg-2 col-md-6 col-xs-6'>
            <h5 className="fw-bold mb-3 fs-6 text-uppercase tracking-wider">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary small">
              <li><a href="#" className="text-primary text-decoration-none hover-light">Home</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Shop All</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">New Arrivals</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Featured Deals</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Wishlist</a></li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 col-xs-6' >
            <h5 className="fw-bold mb-3 fs-6 text-uppercase">Customer Care</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary small">
              <li><a href="#" className="text-primary text-decoration-none hover-light">Track Your Order</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Returns & Exchanges</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Shipping & Delivery</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">FAQs & Support</a></li>
              <li><a href="#" className="text-primary text-decoration-none hover-light">Privacy Policy</a></li>
            </ul>
          </div>

          <div className='col-lg-4 col-md-6' >
            <h5 className="fw-bold mb-3 fs-6 text-uppercase">Stay Connected</h5>
            <p className="text-primary small mb-2">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <Form className="d-flex mb-3">
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-0 rounded-start border-0" 
              />
              <Button variant="primary" className="rounded-0 rounded-end px-3">
                Join
              </Button>
            </Form>
            
            <div className="text-secondary small">
              <p className="mb-1 fw-bold text-light">Secure Payment Gateways</p>
              <div className="d-flex gap-2 fs-4 text-light">
                <i className="fa-brands fa-cc-visa" title="Visa"></i>
                <i className="fa-brands fa-cc-mastercard" title="Mastercard"></i>
                <i className="fa-brands fa-cc-paypal" title="PayPal"></i>
                <i className="fa-brands fa-cc-apple-pay" title="Apple Pay"></i>
                <i className="fa-brands fa-cc-amazon-pay" title="Amazon Pay"></i>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-light my-4" />

        <Row className="text-center text-primary small">
          <Col>
            <p className="mb-0">&copy;  Shopify Inc. All rights reserved. Built with React & React-Bootstrap.</p>
          </Col>
        </Row>
      </div>
   
    </div>
  )
}

export default Footer