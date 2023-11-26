import imgurl from "./assets/arrow.svg"
import "./InfoCards.css"


export default function EducationInfo () {
    return (
        <div className = "educationInfoContainer">
            <button  className = "container">
                <p className="ButtonLabel"> Education</p>
                <img src={imgurl} alt="" />
            </button>
            
        </div>
    )
}

function EducationInfoDropDown () {
}