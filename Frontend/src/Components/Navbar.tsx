// Navbar.scss
import "../Scss/_Navbar.scss"
// Import all photo
import staric from "../assets/Images/staric.png"
import search from "../assets/Images/search.png"
import person from "../assets/Images/person.png"
import { Link } from "react-router-dom"
import OffCanvas from "./OffCanvas"
import { useSelector } from "react-redux"


export default function Navbar() {

  const fetchData = useSelector((item: any) => item.cart.items)
  const holdLength = fetchData.length
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/"><img className="star" src={staric} alt="staric logo is found" /></Link>
          <Link to="/" className="navbar-brand fs-2 fw-medium">Shois</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Shop</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active">On Sale</a>
              </li>
              <li className="nav-item">
                <Link to="new-arrivals" className="nav-link active">New Arrivals</Link>
              </li>
              <li className="nav-item">
                <Link to="dashboard/formdata" className="nav-link active">Dashboard</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex me-3" role="search">
            <div className="position-relative">
              <img src={search} alt="search icon" className="position-absolute top-50 start-0 translate-middle-y ms-2" />
              <input className="form-control me-2 rounded-5 pl-5" type="search" placeholder="Search for Product" aria-label="Search" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </form>
          <div className="position-relative" style={{ cursor: "pointer" }}>
            <OffCanvas />
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" >
              {holdLength}+
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={person} className="ms-3" alt="cart is not found" />
        </div>
      </nav>
    </>
  )
}
