// Scss
import "../../Scss/_Checkout.scss";
// Image Path
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import { Link } from "react-router-dom";
import CommonCart from "./CommonCart";
import deleteIcon from "../../assets/Images/delete.png";
import addAddres from "../../assets/Images/addAddress.png"


export default function ConfirmedAddress() {
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
                <span>Address</span>
                <span>
                  <img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
                </span>
                <span>Payment</span>

                <div className="d-flex justify-content-between mt-5 me-5">
                  <div className="select-address">Select Address</div>
                  <div className="add-address"><span><img src={addAddres} alt="Add Addres" /></span>Add New Address</div>
                </div>
                <div className="address-cards-container">
                  <div className="card selected">
                    <div className="card-bodys p-4">
                      <div className="d-flex justify-content-between me-5">
                        <div> <h5 className="card-title">Ahmad Ali</h5> </div>
                        <div><p className="card-link" data-bs-toggle="modal" data-bs-target="#exampleModalSecond" style={{ cursor: "pointer" }}>Edit</p></div>
                      </div>
                      <p className="card-text">Ahmad2q2@gmail.com</p>
                      <p className="card-text">Punjab, Lahore - GT Road, 66-4 Parkhurst Rd, Chelmsford MA 1824</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-bodys p-4">
                      <div className="d-flex justify-content-between me-5">
                        <div> <h5 className="card-title">Hamza Ali</h5> </div>
                        <div><a className="card-link" style={{ cursor: "pointer" }}>Edit</a></div>
                      </div>
                      <p className="card-text">Hamza3232@gmail.com</p>
                      <p className="card-text">GT Road, 66-4 Parkhurst Rd, Chelmsford MA 1824, Lahore, Punjab</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto d-flex justify-content-between  me-4 countine-res">
                <div className="return">
                  <Link to="/cart/payment-option" className="ReturntoCart "><span className="me-2"><img src={ReturntoCart} alt="ReturntoCart" /></span>Return to Cart</Link>
                </div>
                <div>
                  <Link to=" " className="btn btn-dark " style={{ padding: "7px 31px" }}>Confirm</Link>
                </div>
              </div>
            </div>
            {/* Edit Adress */}
            <div className="modal fade edit-model" id="exampleModalSecond" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-model" >
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Address</h1>
                  </div>
                  <div className="modal-body">
                    <form >
                      <p className="edit-adress mt-4">Edit Your Address Details</p>
                      <div className="row">
                        <div className="form-floating mb-3 col-md-6 ">
                          <input type="text" className="form-control" id="floatingInput" placeholder="First Name" />
                          <label htmlFor="floatingInput" style={{ left: "10px" }}>First Name</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 ">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" />
                          <label htmlFor="floatingInput" style={{ left: "10px" }}>Last Name</label>
                        </div>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email Address (Optional)" />
                        <label htmlFor="floatingInput">Email Address (Optional)</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Street Address" />
                        <label htmlFor="floatingInput">Street Address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="City" />
                        <label htmlFor="floatingInput">City</label>
                      </div>
                    </form>
                  </div>
                  <div className="d-flex justify-content-between mb-4 ms-3 me-3">
                    <p className="delete-address mb-0 mt-2" style={{ cursor: "pointer" }}><span><img src={deleteIcon} alt="deleteIcon" /></span> Delete Address</p>
                    <button type="button" className="btn btn-lg btn-dark save-btn" >Save</button>
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
  )
}
