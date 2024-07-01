import itemNotFound from "../../assets/Images/item-not-found.png"
export default function Model() {
    return (
        <>
            {/*  Button trigger modal  */}
            <button className="btn btn-dark cart-button rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Cart</button>

            {/* <!-- Modal --> */}
            <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="text-center">
                            <img className="item-found" src={itemNotFound} alt="Item Not Found" />
                            <p className="model-heading mb-0">Sorry, The Product is Not Available Right Now</p>
                            <p className="medel-detail">Are you Interested in the Product Variant? Request a restocking! We will notify you by number when it is back in stock</p>
                        </div>
                        <div className="mb-3 ms-3 me-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email here" />
                        </div>
                        <div className="d-grid gap-2 ms-3 me-3 mb-3">
                            <button className="btn btn-dark rounded-pill" type="button">Send </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
