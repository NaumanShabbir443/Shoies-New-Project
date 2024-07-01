import shoes from "../../assets/Images/shoes4.png";
import rectangleShoe from "../../assets/Images/rectangle.png";
import update from "../../assets/Images/update-arrow.png";
import slliper from "../../assets/Images/slliper-without-bg.png";
import shoesNext from "../../assets/Images/info-silder-pic.png";


export default function MatchStyle() {
  return (
    <>
      <section className="match-style">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={shoes} className="d-block w-100" alt="Not Available" />
                  </div>
                  <div className="carousel-item">
                    <img src={slliper} className="d-block img-fluid" alt="Not Available" />
                  </div>
                  <div className="carousel-item">
                    <img src={shoesNext} className="d-block img-fluid" alt="Not Available" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-4">
              <div className="card">
                <div>
                  <img src={rectangleShoe} className="img-fluid" alt="rectangleShoe" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Match Your Style</h5>
                  <p className="card-text">Step into style and comfort with the perfect pair of shoes from Shois. We have a wide selection of shoes for every occasion, from dress shoes and sneakers to sandals and boots.</p>
                  <div className="row">
                    <div className="col-lg-8">
                      <input type="email" className="form-control p-2" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-4 get-update">
                      <button type="button" className="btn btn-dark">Get Updates <span><img src={update} className="update-arrow" alt="Update Arrow Not Found" /></span></button>
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
