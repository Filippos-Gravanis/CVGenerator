import "./InfoCards.css"
import imgurl from "./assets/arrow.svg"
import showButtonHandler from "./sharedFunctions"
export default function BasicInfo({info,setName,setSurname,setEmail}){
    return (
        <div>
        <button onClick={()=>showButtonHandler("basicInfo")} id="basicInfoContainer" className="container">
            <p className="ButtonLabel" >Basic Info</p>
            <img className="showMenuButton" id="basicInfoShowMenuButton" src={imgurl}></img>
        </button>
        <BasicInfoDropDown info={info} setName={setName} setSurname={setSurname} setEmail={setEmail} />
        </div>
    )

}


function BasicInfoDropDown({info,setName,setSurname,setEmail}){
    return(
        <div className="dropDownMenu" id="basicInfoDropDownMenu">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" value={info.name} onChange={setName} />
            <label htmlFor="surname">Surname</label>
            <input type="text" placeholder="Surname" name="surname" value={info.surname} onChange={setSurname}/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" placeholder="Email" value={info.email} onChange={setEmail} />
        </div>
    )
}