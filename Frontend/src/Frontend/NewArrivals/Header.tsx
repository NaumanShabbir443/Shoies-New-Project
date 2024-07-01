// Scss
import "../../Scss/_NewArrivals.scss"

// All Images Path
import arrow from "../../assets/Images/Arrow.png"

export default function Header() {
    return (
        <>
            <section className="header-arrivals mb-5">
                <div className="container">
                    <div className="row header-main">
                        <h1 className="find-shoes mb-4">New Arrivals</h1>
                        <p className="header-para">
                            Step into style and comfort with the perfect pair of shoes from Shois. We have a wide
                            selection of shoes for every occasion, from dress shoes and sneakers to sandals and
                            boots. Our shoes are made from high-quality materials and construction, so you can be
                            sure they'll last.
                        </p>
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-light btn-lg rounded-pill shop-now">Shop Now</button>
                        </div>
                        <div className="text-center mt-5">
                            <img src={arrow} alt="Arrow" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
