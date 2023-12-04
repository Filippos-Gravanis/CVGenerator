import { useState } from "react"
import imgurl from "./assets/arrow.svg"
import "./InfoCards.css"
import showButtonHandler from "./sharedFunctions"


export default function EducationInfo({handleAdd,educationItems}) {
    return (
        <div>
            <button id="educationInfoContainer" className="container" onClick={
                () => showButtonHandler("educationInfo")}>
                <p className="ButtonLabel"> Education</p>
                <img className="showMenuButton" id="educationInfoShowMenuButton" src={imgurl} alt="" />
            </button>
            <EducationInfoDropDown educationItems={educationItems} handleAdd={handleAdd}/>
        </div>
    )
}

function EducationInfoDropDown({handleAdd,educationItems}) {
    const [education, setEducation] = useState({
        "institution": "qweqw",
        "titleOfStudy": "",
        "startDate": "",
        "endDate": "",


    })

    function handleChange (e) {
        console.log(education)
        setEducation({...education,[e.target.name]:e.target.value,id:""})
    }

    return (
        <div className="dropDownMenu" id="educationInfoDropDownMenu">
            <EducationItems items={educationItems} />
            <label htmlFor="institution">Institution</label>
            <input type="text" value={education.institution} onChange={handleChange} name="institution" placeholder="Institution" />
            <label htmlFor="titleOfStudy">Title Of Study</label>
            <input type="text" onChange={handleChange} name="titleOfStudy" value={education.titleOfStudy} placeholder="Title Of Study" />
            <label htmlFor="startDate">Start Date</label>
            <input type="text" onChange={handleChange} name="startDate" value={education.startDate} placeholder="Start Date" />
            <label htmlFor="endDate">End Date</label>
            <input type="text" onChange={handleChange} name="endDate" placeholder="End Date" value={education.endDate} />
            <button onClick={()=>handleAdd(education)}>Add</button>
        </div>
    )
}

function EducationItems ({items}){
    let itemsElements =  items.map(item=>{
            return (<p>{item.titleOfStudy}</p>)
           
    })
    return itemsElements
    

}