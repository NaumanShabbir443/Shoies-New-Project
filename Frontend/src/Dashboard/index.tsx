import { Route, Routes } from "react-router-dom";
import AddData from "./AddData"

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/formdata" element={<AddData />} />
      </Routes>
    </>
  )
}
