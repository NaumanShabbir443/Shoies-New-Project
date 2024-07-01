import { useRef, useState } from "react"
import "../Scss/_AddData.scss"
import axios from "axios";

interface StateType {
  title: string;
  detail: string;
  price: string;
  file: File | {};
}


const initState: StateType = { title: "", detail: "", price: "", file: {} }
export default function AddData() {
  const [state, setState] = useState(initState)

  const [loading, SetLoading] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: any) => {
    const { name, value, type, files } = event.target
    if (type === "file") {
      setState((prevState) => ({ ...prevState, file: files[0] })) // Change key to 'file'
      // SetLoading(true)
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }))
    }

  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', state.title);
    formData.append('detail', state.detail);
    formData.append('price', state.price);
    formData.append('image', state.file as File); // Change key to 'image'

    try {
      const response = await axios.post('http://localhost:7000/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      SetLoading(false)


      setTimeout(() => {
        SetLoading(true)
        setState(initState)
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 3000)

    } catch (error) {
      console.log(error, "Data not Send In data base");
    }
  };
  return (
    <>
      <div className="container mt-5 Add-data">
        <div className="row justify-content-center">
          <h1 className="mt-5 text-center">Add Custom Data</h1>
          <div className="card ">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Shoe Title</label>
                  <input type="text" value={state.title} name="title" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Shoe Details</label>
                  <textarea className="form-control" value={state.detail} name="detail" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Prices</label>
                  <input type="number" name="price" value={state.price} className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4">
                  <label className="form-label fw-bold">Please Select a Picture of shoe</label>
                  <input className="form-control" name="file" ref={fileInputRef} type="file" id="formFile" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">{loading ? "Submit" : "Loading"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
