import "./InfoCards.css"
import imgurl from "./assets/arrow.svg"
import showButtonHandler from "./sharedFunctions"
export default function BasicInfo(){
    return (
        <div>
        <button onClick={()=>showButtonHandler("basicInfo")} id="basicInfoContainer" className="container">
            <p className="ButtonLabel" >Basic Info</p>
            <img className="showMenuButton" id="basicInfoShowMenuButton" src={imgurl}></img>
        </button>
        <BasicInfoDropDown/>
        </div>
    )

}


function BasicInfoDropDown(){
    return(
        <div className="dropDownMenu" id="basicInfoDropDownMenu">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" />
            <label htmlFor="surname">Surname</label>
            <input type="text" placeholder="Surname" name="surname"/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" placeholder="Email" />
        </div>
    )
}