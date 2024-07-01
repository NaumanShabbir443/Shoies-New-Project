import Heart from "../Custom/Heart";
import bestSeller1 from "../../assets/Images/similar-one.png";
import bestSeller2 from "../../assets/Images/similar-two.png";
import bestSeller3 from "../../assets/Images/similar-three.png";
import bestSeller4 from "../../assets/Images/similar-four.png";
import bestSeller5 from "../../assets/Images/similar-five.png";
import bestSeller6 from "../../assets/Images/similar-six.png";

import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";


export default function BestArrivals() {
	return (
		<div>
			<div className="container best-seller">
				<p className="best-arrivals">Best Seller</p>
				<div className="row">
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>

								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller1} className="card-img-top" alt="..." />
							</div>
							<div className=" position-absolute top-0  p-3">
								<span className="new-tag">New</span>
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller2} className="card-img-top" alt="..." />
							</div>

							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller3} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4 mb-5">
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller4} className="card-img-top" alt="..." />
							</div>
							<div className=" position-absolute top-0  p-3">
								<span className="new-tag">New</span>
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller5} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<span className="plus-icon">+</span>
								</div>
								<img src={bestSeller6} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
