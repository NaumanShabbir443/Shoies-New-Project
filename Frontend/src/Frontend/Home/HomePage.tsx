import "../../Scss/_HomePage.scss";
import versace from "../../assets/Images/versace.png";
import zara from "../../assets/Images/zara.png";
import gucci from "../../assets/Images/gucci.png";
import calvin from "../../assets/Images/calvin.png";
import CustomSlider from "./Slider";
import BestSeller from "./BestSeller";
import MyStery from "./MyStery";
import OurCategories from "./OurCategories";
import Slippers from "./Slippers";
import MatchStyle from "./MatchStyle";


export default function HomePage() {


  return (
    <>

      <section className="header">
        <div className="container">
          <div className="row header-main">
            <h1 className="find-shoes">Find Shoes That <span className="matches">Matches</span> Your Style</h1>
            <p className="header-para">
              Step into style and comfort with the perfect pair of shoes from Shois. We have a wide
              selection of shoes for every occasion, from dress shoes and sneakers to sandals and
              boots. Our shoes are made from high-quality materials and construction, so you can be
              sure they'll last.
            </p>
          </div>
        </div>
      </section>


      {/* Brand Section */}
      <section className="brand-name p-5 mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col mb-4"><img src={versace} alt="Versace" /></div>
            <div className="col mb-4"><img src={zara} alt="Zara" /></div>
            <div className="col mb-4"><img src={gucci} alt="Gucci" /></div>
            <div className="col mb-4"><img src={calvin} alt="Calvin Klein" /></div>
            <div className="col mb-4"><img src={versace} alt="Versace" /></div>
          </div>
        </div>
      </section>

      {/* silder section  */}
      <CustomSlider />

      {/* Best Seller section  */}
      < BestSeller />

      {/* My Strey Collection */}
      <MyStery />

      {/* Our Categories  */}
      <OurCategories />

      {/* Sliiper */}
      <Slippers />

      {/* Match Your Style */}
      <MatchStyle />

    </>
  );
}
