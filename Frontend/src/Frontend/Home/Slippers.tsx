// All Images Path
import slipers from "../../assets/Images/slippers.png";
import arrow from "../../assets/Images/right-arrow-white.png";

export default function Slippers() {
  return (
    <>
      <section className="slippers">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-7 slider-sllipers">
                          <h3>SLLIPERS</h3>
                          <img src={arrow} className="img-fluid arrow-set" alt="slipers is not found" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" />
                        </div>
                        <div className="col-md-5 ">
                          <img src={slipers} className="img-fluid" alt="slipers is not found" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-7 slider-sllipers">
                          <h3>SLLIPERS</h3>
                          <img src={arrow} className="img-fluid arrow-set" alt="slipers is not found" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" />
                        </div>
                        <div className="col-md-5 ">
                          <img src={slipers} className="img-fluid" alt="slipers is not found" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-7 slider-sllipers">
                          <h3>SLLIPERS</h3>
                          <img src={arrow} className="img-fluid arrow-set" alt="slipers is not found" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" />
                        </div>
                        <div className="col-md-5 ">
                          <img src={slipers} className="img-fluid" alt="slipers is not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
