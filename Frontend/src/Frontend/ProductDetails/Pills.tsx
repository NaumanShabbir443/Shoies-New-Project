// Scss
import "../../Scss/_ProductDetails.scss";
import arrange from "../../assets/Images/arrange.png";
import tick from "../../assets/Images/tick.png";
import dots from "../../assets/Images/dots.png";

import Rating from '@mui/material/Rating';
export default function Pills() {
  return (
    <>
      <div className="container mt-5 pt-5 custom-tabs mb-5">
        <div className="row">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item col-md-6" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rating & Reviews</button>
            </li>
            <li className="nav-item col-md-6" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">FAQs</button>
            </li>
          </ul>
        </div>
        <div className="row tabs-data">
          <div className="top-row">
            <div >
              <span className="all-review">All Reviews</span> <span>(451)</span>
            </div>
            <div className="d-flex review">
              <img src={arrange} className="arrange me-2" alt="Arrange" />
              <select className="form-select custom-select me-2" aria-label="Default select example">
                <option selected>Latest</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="d-grid gap-2 col-6 mx-auto review">
                <button className="btn btn-dark rounded-pill" type="button">Write a Review</button>
              </div>
            </div>
          </div>
          <div >
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row mt-5">
                  <div className="col-md-6 mb-3 ">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <Rating name="size-medium" defaultValue={2} />
                          </div>
                          <div>
                            <img src={dots} alt="Dots" style={{ cursor: "pointer" }} />
                          </div>
                        </div>
                        <div className="mt-3 mb-2"><span className="card-title">Samantha D.</span><span className="mb-1"><img src={tick} alt="Tick" /></span></div>
                        <p className="card-details">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                        <p className="posted-date mb-0">Posted on August 14, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div >
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">ssss</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
