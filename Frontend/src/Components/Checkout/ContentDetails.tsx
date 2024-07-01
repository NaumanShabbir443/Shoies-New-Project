// Scss
import "../../Scss/_Checkout.scss";
// Image Path
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import { Link } from "react-router-dom";
import CommonCart from "./CommonCart";
import { useState } from "react";
import axios from "axios";

export default function ContentDetails() {
  const [state, setState] = useState("")

  const handleChange = (event: any) => {
    const { value } = event.target
    setState(value)
  }
  const handleNumber = async () => {
    console.log("state state", state)

    try {
      const formattedNumber = state.startsWith('+') ? state : `+${state}`;
      const response = await axios.post("http://localhost:7000/otp", { num: formattedNumber })
      console.log("Response from server: ", response.data);
    } catch (error) {
      console.error("Error sending OTP: ", error);
    }
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
                <span>Address</span>
                <span>
                  <img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
                </span>
                <span>Payment</span>

                <div className="mb-3 mt-5 content-input">
                  <label htmlFor="exampleFormControlInput1" className="form-label mb-4">
                    Enter Your Phone Number
                  </label>
                  <p className="text-primary">Use this format 923001234567</p>
                  <input
                    type="number"
                    name="number"
                    className="form-control p-3"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between  me-4 countine-res">
                <div className="return">
                  <Link to="" className="ReturntoCart "><span className="me-2"><img src={ReturntoCart} alt="ReturntoCart" /></span>Return to Cart</Link>
                </div>
                <div>
                  <Link to="" className="btn btn-dark " style={{ padding: "7px 31px" }} onClick={handleNumber} >Continue</Link>
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
