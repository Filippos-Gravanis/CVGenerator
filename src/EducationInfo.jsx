import { useState } from "react"
import imgurl from "./assets/arrow.svg"
import deleteUrl from "./assets/delete.svg"
import "./InfoCards.css"
import showButtonHandler from "./sharedFunctions"


export default function EducationInfo({deleteEducation,handleAdd,educationItems}) {
    return (
        <div>
            <button id="educationInfoContainer" className="container" onClick={
                () => showButtonHandler("educationInfo")}>
                <p className="ButtonLabel"> Education</p>
                <img className="showMenuButton" id="educationInfoShowMenuButton" src={imgurl} alt="" />
            </button>
            <EducationInfoDropDown deleteEducation={deleteEducation} educationItems={educationItems} handleAdd={handleAdd}/>
        </div>
    )
}

function EducationInfoDropDown({deleteEducation,handleAdd,educationItems}) {
    const [education, setEducation] = useState({
        "institution": "",
        "titleOfStudy": "",
        "startDate": "",
        "endDate": "",
        "id":"",


    })

    function handleChange (e) {
        console.log(education)
        setEducation({...education,[e.target.name]:e.target.value,})
    }
    function handleEducationClick (e){
        console.log(e.target.id)
        console.log(educationItems);
        deleteEducation(e.target.id)
    }
    
    return (
        <div className="dropDownMenu" id="educationInfoDropDownMenu">
            <EducationItems items={educationItems} handleEducationClick={handleEducationClick} />
            <label htmlFor="institution">Institution</label>
            <input required type="text" value={education.institution} onChange={handleChange} name="institution" placeholder="Institution" />
            <label htmlFor="titleOfStudy">Title Of Study</label>
            <input required type="text" onChange={handleChange} name="titleOfStudy" value={education.titleOfStudy} placeholder="Title Of Study" />
            <label htmlFor="startDate">Start Date</label>
            <input type="text" onChange={handleChange} name="startDate" value={education.startDate} placeholder="Start Date" />
            <label htmlFor="endDate">End Date</label>
            <input type="text" onChange={handleChange} name="endDate" placeholder="End Date" value={education.endDate} />
            <button type="submit" onClick={()=>{
                setEducation({...education,id:(Math.random()*10000)})
                handleAdd(education)
                setEducation({
                    "institution": "",
                    "titleOfStudy": "",
                    "startDate": "",
                    "endDate": "",
                    "id":"",
            
            
                })
            }}
                
                >Add</button>
        </div>
    )
}

function EducationItems ({items,handleEducationClick}){
    let itemsElements =  items.map(item=>{
            return (
            <div className="educationItem" key={item.id}>
            <div className="educationItemHeaderContainer">
                <div className="educationItemHeader"  id={item.id} onClick={()=>{}} >{item.titleOfStudy}</div>
                <img src={deleteUrl} onClick={handleEducationClick} className="deleteIcon" alt=""/>
            </div>
            <hr className="divider" />
            </div>
            )
           
    })
    return itemsElements
    

}