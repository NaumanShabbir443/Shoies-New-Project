// All Images Path 
import rotateView from "../../assets/Images/rotate-view.png";
import sideView from "../../assets/Images/side-view.png";
import secondeSideView from "../../assets/Images/second-side-view.png";
import backView from "../../assets/Images/back-view.png";
import topView from "../../assets/Images/top-view.png";
import fullPreview from "../../assets/Images/main-detail-shoes.png";
import currentShoes from "../../assets/Images/current-shoes.png";
import anotherShoes1 from "../../assets/Images/another-shoes1.png";
import anotherShoes2 from "../../assets/Images/another-shoes2.png";
import anotherShoes3 from "../../assets/Images/another-shoes3.png";
import increment from "../../assets/Images/increament.png";
import decrement from "../../assets/Images/nagtive.png";
import cartSize from "../../assets/Images/cart-size.png";
import description from "../../assets/Images/description.png";
import authenticity from "../../assets/Images/authenticity.png";
import deliveryReturn from "../../assets/Images/authenticity.png";
import meansOfPayment from "../../assets/Images/meansofpayment.png";

// Scss File Import 
import "../../Scss/_ProductDetails.scss";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import Model from "../Custom/Model";

export default function FullDetails() {
	const [state, setState] = useState("one")
	const [count, setCount] = useState(1)
	const changeColor = (event: string) => {
		setState(event)
		console.log("test", state);

	}

	const handleIncrement = () => {
		setCount(count + 1)
	}
	const handleDecrement = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}


	return (
		<>
			<section className="product-details">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-1">
							<img src={rotateView} className="mb-2 me-2 img-fluid" alt="Shoes Rotate view" />
							<img src={sideView} className="mb-2 me-2 img-fluid" alt="Shoes Rotate view" />
							<img src={secondeSideView} className="mb-2 me-2 img-fluid" alt="Shoes Rotate view" />
							<img src={backView} className="mb-2 me-2 img-fluid" alt="Shoes Rotate view" />
							<img src={topView} className="mb-2 me-2 img-fluid" alt="Shoes Rotate view" />
						</div>
						<div className="col-md-5">
							<img src={fullPreview} className="img-fluid full-preview" alt="Full Preview" />
						</div>
						<div className="col-md-6">
							<h1 className="shoes-heading">One Life Gray Shoes - Men</h1>
							<div className="d-flex">
								<div className="serial-number me-4"><span className="sku">SKU:</span><span>CZ8065-100</span></div>
								<div className="serial-number"><span className="sku">Release Date: </span><span>December 2022</span></div>
							</div>
							<div className='mt-2 d-flex'>
								<div className="me-2">
									<Rating name="size-medium" defaultValue={2} />
								</div>
								<div>
									<p className="raiting-number">4.5/5</p>
								</div>
							</div>
							<div>
								<span className="current-price me-3">€260</span>
								<span className="old-price me-3">€300</span>
								<span className="discount">-40%</span>
							</div>
							<p className="mt-2 border-bottom pb-4 text-custom">This pair of shoes is perfect for any occasion. Crafted from durable and breathable materials, they offer superior comfort and style..</p>
							<div className="mb-3 border-bottom pb-4">
								<p className="text-custom">Select Colors</p>
								<span className="me-3"><img src={currentShoes} alt="Current Shoes" /></span>
								<span className="me-3"><img src={anotherShoes1} alt="Current Shoes" /></span>
								<span className="me-3"><img src={anotherShoes2} alt="Current Shoes" /></span>
								<span className="me-3"><img src={anotherShoes3} alt="Current Shoes" /></span>
							</div>
							<div className="mb-3 border-bottom pb-4">
								<p className="text-custom">Choose Size</p>
								<button type="button" className={`btn custom-button-sizing rounded-pill ${state === "one" ? "hover-set" : ""} `} onClick={() => changeColor("one")}>41</button>
								<button type="button" className={`btn custom-button-sizing rounded-pill ${state === "two" ? "hover-set" : ""} `} onClick={() => changeColor("two")}>42</button>
								<button type="button" className={`btn custom-button-sizing rounded-pill ${state === "three" ? "hover-set" : ""} `} onClick={() => changeColor("three")}>43</button>
								<button type="button" className={`btn custom-button-sizing rounded-pill ${state === "four" ? "hover-set" : ""} `} onClick={() => changeColor("four")}>44</button>
							</div>
							<div className="row mt-5 mb-3">
								<div className="col-md-5 col-sm-12 counter-setting ">
									<span className="counter-bg rounded-pill">
										<span style={{ cursor: "pointer" }} className="increment"><img src={decrement} alt="Decrement" onClick={handleDecrement} /></span>
										<span>{count}</span>
										<span style={{ cursor: "pointer" }} className="decrement"><img src={increment} alt="Increment" onClick={handleIncrement} /></span>
									</span>
								</div>
								<div className="d-grid gap-2 col-sm-12 col-md-7 ">
									<Model />
								</div>
							</div>
							<div className="mt-5 mb-5">
								<span className="mb-1"><img src={cartSize} alt="Cart Size" /></span>
								<span className="size-cart">Size Chart</span>
							</div>
							<div className="accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											<span><img src={description} alt="Description" /></span>
											<span className="description">DESCRIPTION</span>
										</button>
									</h2>
									<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Drake and Nike continue their collaboration through the Nocta label and revisit the legendary Air Force 1 Low to mark the model's 40th anniversary .The Nike Air Force 1 Low NOCTA Drake Certified Lover Boy takes the curves of the silhouette imagined in 1982 by Bruce Kilgore by adding details that make it original. We then find an immaculate grained leather upper . Only the deubrés provide a slight contrast in material. On the heel reinforcement of the left shoe, we can see the Nocta logo while the words “ AIR ” on the sole have been replaced by “ Love you forever ”.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											<span><img src={authenticity} alt="Authenticity" /></span>
											<span className="description">AUTHENTICITY</span>
										</button>
									</h2>
									<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											<span><img src={deliveryReturn} alt="DELIVERY & RETURN" /></span>
											<span className="description">DELIVERY & RETURN</span>
										</button>
									</h2>
									<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											<span><img src={meansOfPayment} alt="Description" /></span>
											<span className="description">MEANS OF PAYMENT</span>
										</button>
									</h2>
									<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
