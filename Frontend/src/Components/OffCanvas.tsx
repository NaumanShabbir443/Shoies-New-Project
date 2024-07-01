

import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import cart from "../../src/assets/Images/cart.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
// import cartOne from '../assets/Images/cart-one.png';
import crossButton from '../assets/Images/crossButton.png';
import decrement from '../assets/Images/cartDecrement.png';
import increment from '../assets/Images/cartIcrement.png';
// scss
import "../Scss/_Offcanvas.scss"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux-Toolkit/ConfigureStore/Store';

export default function OffCanvas() {

  const fetchData = useSelector((state: RootState) => state.cart.items)
  console.log("fetchData", fetchData)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <img src={cart} alt="Menu" onClick={handleShow} style={{ cursor: 'pointer' }} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='side-bar'>
            {Array.isArray(fetchData) && fetchData.map((data: any) => {
              return <>
                <Card>
                  <Card.Body className='d-flex ps-0 pe-0'>

                    <div className='me-2 ' key={data.id}><img src={data.image} className='w-100' alt="cartOne" /></div>
                    <div>
                      <p className='mb-0 cart-title'>{data.title}</p>
                      <p className='shoe-color'>Yellow / Medium</p>
                      <span className='d-flex operator'>
                        <span><img src={decrement} className='me-3' alt="decrement" /></span>
                        <p className='mb-0 me-3'>1</p>
                        <span><img src={increment} alt="increment" /></span>
                      </span>
                      <p className='text-end cart-price'>{data.price}</p>
                    </div>
                    <div className='ms-3'>
                      <img src={crossButton} alt="crossButton" />
                    </div>
                  </Card.Body>
                </Card >
              </>
            })}


            {/* Cart End Calculation */}
            {fetchData.length > 0 && (
              <section className='cart-end'>
                <div className='d-flex justify-content-between'>
                  <div><p className='cart-subTotal'>Subtotal</p></div>
                  <div><p className='cart-subTotal'>Rs.{fetchData.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div><p className='cart-subTotal'>Shipping</p></div>
                  <div><p className='cart-subTotal'>Rs. 200</p></div>
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <div><p className='cart-subTotal'>VAT</p></div>
                  <div><p className='cart-subTotal'>Rs. 10</p></div>
                </div>
                <div className='d-flex justify-content-between mt-4'>
                  <div><p className='cart-Total'>Total</p></div>
                  <div><p className='cart-Total'>Rs{fetchData.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p></div>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Link to="cart/content-detail" className="btn btn-dark" type="button" onClick={handleClose}>Go to Checkout</Link>
                </div>
              </section>
            )}
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}