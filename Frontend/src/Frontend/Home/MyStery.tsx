// All Images Path
import collection from "../../assets/Images/my-stery.png";
import shoesOne from "../../assets/Images/shoes3.png";
import shoesThree from "../../assets/Images/MySteryThree.png";
import shoesFour from "../../assets/Images/MySteryFour.png";
import plus from "../../assets/Images/plus.png";
import rightArrow from "../../assets/Images/silder-arrow.png"
// SCSS File Import 
import "../../Scss/_HomePage.scss"

import Rating from '@mui/material/Rating';
import Heart from "../Custom/Heart";

export default function MyStery() {


  return (
    <>
      <div className="container ps-0 mt-5 pt-5 mb-5">
        <div className="row collection">
          <div className="col-md-5 ">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="position-relative">
                    <img src={collection} className="d-block w-100" alt="collection is not found" />
                    <p className="position-absolute my-stery">Mystery <br /> Collection</p>
                    <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExample" data-bs-slide="next" />
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="position-relative">
                    <img src={collection} className="d-block w-100" alt="collection is not found" />
                    <p className="position-absolute my-stery">Mystery <br /> Collection</p>
                    <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExample" data-bs-slide="next" />
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="position-relative">
                    <img src={collection} className="d-block w-100" alt="collection is not found" />
                    <p className="position-absolute my-stery">Mystery <br /> Collection</p>
                    <img src={rightArrow} className="position-absolute arrow" alt="rightArrow is not found" data-bs-target="#carouselExample" data-bs-slide="next" />
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row cards">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3" >
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoesOne} className="card-img-top rounded-4" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating name="size-medium" defaultValue={2} />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <Heart />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoesOne} className="card-img-top rounded-4" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating name="size-medium" defaultValue={2} />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row cards">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <Heart />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoesThree} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating name="size-medium" defaultValue={2} />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <Heart />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoesFour} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating name="size-medium" defaultValue={2} />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
