// Scss
import "../../Scss/_Checkout.scss";
// Image Path
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import CreditCard from "../../assets/Images/CreditCard.png";
import JazzCash from "../../assets/Images/JazzCash.png";
import EasyPaisa from "../../assets/Images/EasyPaisa.png";
import CashOnDelivery from "../../assets/Images/CashOnDelivery.png";
import { Link, useNavigate } from "react-router-dom";
import CommonCart from "./CommonCart";
import cardIcons from "../../assets/Images/AllCard.png"
import { SetStateAction, useState } from "react";
import ComfirmedOrder from "../../assets/Images/ConfirmedOrder.png"

export default function PaymentOptions() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleChange = (event: SetStateAction<string>) => {
    setSelectedPayment(event)
  }

  const navigate = useNavigate()

  const handleContinue = () => {

    navigate("/cart/confirm-address")
  }

  return (
    <>
      <section className="content-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mt-3 mb-5 border-end d-flex flex-column justify-content-between">
              <div>
                <span className="phone-number">Phone Number</span>
                <span>
                  <img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
                </span>
                <span className="phone-number">Address</span>
                <span>
                  <img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
                </span>
                <span className="phone-number">Payment</span>
                <div className="mb-3 mt-5  content-input">
                  <label htmlFor="addressDetails" className="form-label mb-2 mb-4">
                    Select Payment Option
                  </label>
                  <div className="payment-options">
                    <div className={`payment-card ${selectedPayment == "First" ? "paymemt-outline" : ""} `} onClick={() => { handleChange("First") }}>
                      <img src={CreditCard} alt="Credit/Debit Card" />
                      <span>Credit/Debit Card</span>
                    </div>
                    <div className={`payment-card ${selectedPayment == "Second" ? "paymemt-outline" : ""} `} onClick={() => { handleChange("Second") }}>
                      <img src={JazzCash} alt="Jazzcash" />
                      <span>Jazzcash</span>
                    </div>
                    <div className={`payment-card ${selectedPayment == "Third" ? "paymemt-outline" : ""} `} onClick={() => { handleChange("Third") }}>
                      <img src={EasyPaisa} alt="EasyPaisa" />
                      <span>EasyPaisa</span>
                    </div>
                    <div className={`payment-card ${selectedPayment == "Four" ? "paymemt-outline" : ""} `} onClick={() => { handleChange("Four") }}>
                      <img src={CashOnDelivery} alt="Cash on Delivery" />
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                  {/* Show payment input */}
                  {selectedPayment ? <div className="credit-card-form mt-5 me-4">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Card Number" />
                      <div className="card-icons">
                        <img src={cardIcons} alt="Accepted Cards" className="card-icons-image" />
                      </div>
                    </div>
                    <div className="input-group">
                      <input type="text" className="form-control half-width me-4" placeholder="Expiration MM/YY" />
                      <input type="text" className="form-control half-width" placeholder="CVV" />
                    </div>
                  </div> : ""}
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between  me-4 countine-res">
                <div className="return">
                  <Link to="/cart/address-detail" className="ReturntoCart ">
                    <span className="me-2"><img src={ReturntoCart} alt="ReturntoCart" /></span>Return to Cart</Link>
                </div>
                <div>
                  <Link to="" className="btn btn-dark " style={{ padding: "7px 31px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Continue</Link>
                </div>
              </div>
              {/* Show Confirmed Popup */}
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">

                    <div className="modal-body  pb-0">
                      <div className=" text-center">
                        <img src={ComfirmedOrder} alt="ComfirmedOrder" />
                        <p className="confirmed-statement mt-3 border-bottom">Your Order has been Confirmed!</p>
                        <div className="d-flex justify-content-between mt-4">
                          <div className="order-name">Order Number:</div>
                          <div className="order-number">1465278</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div className="order-name">Price:</div>
                          <div className="order-number">Rs. 20,000</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div className="order-name">Number of items:</div>
                          <div className="order-number">03</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div className="order-name">Contact Number:</div>
                          <div className="order-number">0300-1234567</div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div className="order-name">Address:</div>
                          <div className="order-number">49-C, P.O.Box: 676, Lahore</div>
                        </div>
                      </div>
                      <p className="support mt-4">If you have any questions or require additional assistance, feel free to reach out to our customer support team at 100x</p>
                      <div className="d-grid gap-2 mt-5 mb-4">
                        <button className="btn btn-dark" onClick={handleContinue} data-bs-dismiss="modal" >Continue Shopping</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Part */}
            <div className="col-md-5 cart-detail">
              <CommonCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
