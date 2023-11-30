import imgurl from "./assets/arrow.svg"
import "./InfoCards.css"
import showButtonHandler from "./sharedFunctions"


export default function EducationInfo () {
    return (
        <div>
            <button id="educationInfoContainer" className = "container" onClick={
                ()=>showButtonHandler("educationInfo")}>
                <p className="ButtonLabel"> Education</p>
                <img className="showMenuButton" id="educationInfoShowMenuButton" src={imgurl} alt="" />
            </button>
            <EducationInfoDropDown/>
        </div>
    )
}

function EducationInfoDropDown () {
    return(
        <div className="dropDownMenu" id="educationInfoDropDownMenu">
            <label htmlFor="institution">Institution</label>
            <input type="text" name="institution" placeholder="Institution"/>
            <label htmlFor="titleOfStudy">Title Of Study</label>
            <input type="text" name="titleOfStudy" placeholder="Title Of Study"/>
            <label htmlFor="startDate">Start Date</label>
            <input type="text" name="startDate" placeholder="Start Date"/>
            <label htmlFor="endDate">End Date</label>
            <input type="text" name="endDate" placeholder="End Date"/>
        </div>
    )
}