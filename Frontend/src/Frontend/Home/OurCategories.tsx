// All Images Path Availabale
import category from "../../assets/Images/categories.png"
import smallSilder from "../../assets/Images/shoes3.png";
import hoodies from "../../assets/Images/hoodies.png";
import rightArrow from "../../assets/Images/silder-arrow.png";
import shirts from "../../assets/Images/shirt1.png";


// Scss
import "../../Scss/_HomePage.scss"


export default function OurCategories() {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="row">
            {/* Our categories */}
            <div className="col-md-8">
              <div className="card text-bg-dark">
                <img src={category} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title">Our Categories</h5>
                </div>
              </div>
              {/* Small Slider Categories */}
              <div className="row small-slider">
                <div className="col-md-6 mt-3 ">
                  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-4">
                      <div className="carousel-item active">
                        <div className="position-relative">
                          <img src={smallSilder} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shoes</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="position-relative">
                          <img src={smallSilder} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shoes</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found"
                            data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="position-relative">
                          <img src={smallSilder} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shoes</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found"
                            data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3 ">
                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-4">
                      <div className="carousel-item active" data-bs-interval="10000">
                        <div className="position-relative">
                          <img src={shirts} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shirts</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" />
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <div className="position-relative">
                          <img src={shirts} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shirts</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="position-relative">
                          <img src={shirts} className="d-block w-100" alt="smallSilder is not found" />
                          <p className="position-absolute my-stery">Shirts</p>
                          <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hodies */}
            <div className="col-md-4 hoodies ">
              <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner rounded-4">
                  <div className="carousel-item active">
                    <div className="position-relative">
                      <img src={hoodies} className="d-block w-100" alt="smallSilder is not found" />
                      <p className="position-absolute my-stery">Hoodies</p>
                      <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="position-relative">
                      <img src={hoodies} className="d-block w-100" alt="smallSilder is not found" />
                      <p className="position-absolute my-stery">Hoodies</p>
                      <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="position-relative">
                      <img src={hoodies} className="d-block w-100" alt="smallSilder is not found" />
                      <p className="position-absolute my-stery">Hoodies</p>
                      <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
