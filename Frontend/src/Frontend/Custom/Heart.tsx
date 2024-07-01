import heart from "../../assets/Images/heart.png";
import heartFill from "../../assets/Images/heart-fill.png";
import { useState } from "react";

export default function Heart() {
    const [imageChange, SetImageChange] = useState(false)

    const handleImage = () => {
        SetImageChange(!imageChange)
    }
    return (
        <>
            <div className="like-icon position-absolute top-0 end-0 p-3" onClick={handleImage}>
                <img src={imageChange ? heartFill : heart} alt="like icon is not found " />
            </div>
        </>
    )
}
