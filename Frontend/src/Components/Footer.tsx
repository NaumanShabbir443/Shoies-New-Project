// All Path Images
import footerStar from "../assets/Images/White-star.png";
import certificate from "../assets/Images/certificate.png";
import Instagram from "../assets/Images/instragram.png";
import visaCard from "../assets/Images/visa.png";
import masterCard from "../assets/Images/master-card.png";
import paypal from "../assets/Images/paypal.png";
import appleCard from "../assets/Images/apple-pay.png";


// Scss File Import
import "../Scss/_Footer.scss"

export default function Footer() {
	return (
		<>
			<footer>
				<div className="container">
					<div className="row border-bottom">
						<div className="col-md-3">
							<span><img src={footerStar} className="mb-3 me-2" alt="footerStar is not found" /></span>
							<span className="footer-heading">Shois</span>
							<ul className="ps-0 pt-4">
								<li ><span><img src={certificate} className="me-2 mb-1" alt="certificate is not found" /></span>ENTREPRISE CERTIFIÉE</li>
								<li>Entrepôt66 Av des champs-Élysées75008 Paris</li>
								<li className="mt-3"><img src={Instagram} alt="" /></li>
							</ul>
						</div>
						<div className="col-md-2 company ">
							<ul className="ps-0 ">
								<li className="companies mb-4">Company</li>
								<li className="shoes">Shoes</li>
								<li className="shoes">Slippers</li>
								<li className="shoes">Shirts</li>
								<li className="shoes">Hoodies</li>
							</ul>
						</div>
						<div className="col-md-2 company ">
							<ul className="ps-0 ">
								<li className="companies mb-4">Help</li>
								<li className="shoes">Customer Support</li>
								<li className="shoes">About Us</li>
								<li className="shoes">Terms & Conditions</li>
								<li className="shoes">Privacy Policy</li>
							</ul>
						</div>
						<div className="col-md-2 company ">
							<ul className="ps-0 ">
								<li className="companies mb-4">AIDE</li>
								<li className="shoes">FAQ</li>
								<li className="shoes">Contact</li>
								<li className="shoes">Stories </li>
								<li className="shoes">Jobs</li>
							</ul>
						</div>
						<div className="col-md-3 company ">
							<ul className="ps-0 ">
								<li className="companies mb-4">CAn we help you?</li>
								<li className="">Call us:</li>
								<li className="shoes">0698897299</li>
								<li className="">Email: </li>
								<li className="shoes">officialflexbank@gmail.com</li>
							</ul>
						</div>
					</div>
					<div className="d-flex justify-content-between mt-4">
						<div className="all-rights">
							Shois.co © 2022-2023, All Rights Reserved
						</div>
						<div>
							<span><img src={visaCard} alt="Visa Credit Card" /></span>
							<span><img src={masterCard} alt="Master Credit Card " /></span>
							<span><img src={paypal} alt="Paypal Credit Card" /></span>
							<span><img src={appleCard} alt="AppleCard Credit Card" /></span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
