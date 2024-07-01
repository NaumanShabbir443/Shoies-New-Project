import { useEffect, useRef, useState, } from "react";
import Slider from "react-slick";
import Heart from "../Custom/Heart";
import plus from "../../assets/Images/plus.png";

import RightArrow from "../../assets/Images/right-arrow.png";
import LiftArrow from "../../assets/Images/left-arrow.png";
import Ratings from '../Custom/Ratings';

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux-Toolkit/Slices/AddToCartSlice"

export default function CustomSlider() {

  const Naviagate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    Naviagate("/product-details")
  }


  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const [fetchData, setFetchData] = useState([])

  const allData = async () => {
    try {
      const response = await axios.get("http://localhost:7000/getUsers")
      console.log(response.data)
      setFetchData(response.data)
    }
    catch (error: any) {
      console.log(error.message)

    }
  }
  useEffect(() => {
    allData()
  }, [])

  const handleAddToCart = (data: any) => {
    const item: any = {
      id: data.id,
      title: data.title,
      detail: data.detail,
      price: data.price,
      image: `http://localhost:7000/${data.file.replace(/\\/g, '/')}`,
    }

    dispatch(addToCart(item))
  }


  return (
    <>
      {/* Slider Section */}
      <section className="arrivals">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div><p className="new-arrivals">NEW ARRIVALS</p></div>
              <div>
                <span className="see-more">See more</span>
                <span className="border-custom me-2 ms-3" onClick={prevSlide}><img src={LiftArrow} alt="LiftArrow is not found" /></span>
                <span className=" border-custom" onClick={nextSlide}><img src={RightArrow} alt="RightArrow is not found" /></span>
              </div>
            </div>
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
                {fetchData.map((data: any) => {
                  return <>
                    <div key={data.id} className="card border-0" >
                      <div className="position-relative">
                        <div className="like-icon position-absolute top-0 end-0 p-3">
                          <Heart />
                        </div>
                        <div className="plus-button position-absolute bottom-0 end-0 p-3" onClick={() => { handleAddToCart(data) }}>
                          {/* Add to cart */}
                          <img src={plus} alt="like icon is not found " />
                        </div>
                        <img src={`http://localhost:7000/${data.file.replace(/\\/g, '/')}`} className="card-img-top" alt="..." onClick={handleNavigate} />
                      </div>
                      <div className="card-body">
                        <Ratings />
                        <p className="card-title" onClick={handleNavigate}>{data.title}</p>
                        <p className="card-text">{data.detail}</p>
                        <span className="card-price">€ {data.price}</span>
                      </div>
                    </div>
                  </>
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
