import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import ProductDetails from "./ProductDetails";
import NewArrivals from "./NewArrivals";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function FrontendRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
            </Routes>
            <Footer />

        </>
    )
}
