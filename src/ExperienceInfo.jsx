import "./InfoCards.css"
import imgurl from "./assets/arrow.svg"
import showButtonHandler from "./sharedFunctions"
export default function ExperienceInfo(){
    return (
        <div>
        <button onClick={()=>showButtonHandler("experienceInfo")} id="experienceInfoContainer" className="container">
            <p className="ButtonLabel" >Experience</p>
            <img className="showMenuButton" id="experienceInfoShowMenuButton" src={imgurl}></img>
        </button>
        <ExperienceInfoDropDown/>
        </div>
    )

}


function ExperienceInfoDropDown(){
    return(
        <div className="dropDownMenu" id="experienceInfoDropDownMenu">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" placeholder="Company Name" name="companyName" />
            <label htmlFor="positionTitle">Position Title</label>
            <input type="text" placeholder="Position Title" name="positionTitle"/>
            <label htmlFor="expStartDate">Start Date</label>
            <input type="text" name="expStartDate" id="" placeholder="Start Date" />
            <label htmlFor="expEndDate">End Date</label>
            <input type="text" name="expEndDate" id="" placeholder="End Date" />
        </div>
    )
}