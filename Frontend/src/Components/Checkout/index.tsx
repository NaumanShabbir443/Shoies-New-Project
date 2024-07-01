import { Route, Routes } from "react-router-dom";
import ContentDetails from "./ContentDetails";
import Navbar from "../Navbar";
import VerifyCode from "./VerifyCode";
import AdressDetails from "./AdressDetails";
import PaymentOptions from "./PaymentOptions";
import ConfirmedAddress from "./ConfirmedAddress";

export default function index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="content-detail" element={<ContentDetails />} />
                <Route path="verify-code" element={<VerifyCode />} />
                <Route path="address-detail" element={<AdressDetails />} />
                <Route path="payment-option" element={<PaymentOptions />} />
                <Route path="confirm-address" element={<ConfirmedAddress />} />
            </Routes>
        </>
    )
}
