import "./InfoCards.css"
import imgurl from "./assets/arrow.svg"
import showButtonHandler from "./sharedFunctions"
import deleteUrl from "./assets/delete.svg"
import { useState } from "react"

export default function ExperienceInfo({deleteExperience,handleAdd,experienceItems}){
    return (
        <div>
        <button onClick={()=>showButtonHandler("experienceInfo")} id="experienceInfoContainer" className="container">
            <p className="ButtonLabel" >Experience</p>
            <img className="showMenuButton" id="experienceInfoShowMenuButton"  src={imgurl}></img>
        </button>
        <ExperienceInfoDropDown deleteExperience={deleteExperience} handleAdd={handleAdd} experienceItems={experienceItems}/>
        </div>
    )

}


function ExperienceInfoDropDown({deleteExperience,handleAdd,experienceItems}){
    const [experience, setExperience] = useState({
        "companyName": "",
        "positionTitle": "",
        "expStartDate": "",
        "expEndDate": "",
        "id":"",


    })
    function handleChange (e) {
        console.log(experience)
        setExperience({...experience,[e.target.name]:e.target.value,})
    }
    function onDeleteButtonClicked (e){
        console.log(e)
        deleteExperience(e.id)
    }

    return(
        <div className="dropDownMenu" id="experienceInfoDropDownMenu">
        <ExperienceItems items={experienceItems} onDeleteButtonClicked={onDeleteButtonClicked} />
            <label htmlFor="companyName">Company Name</label>
            <input type="text" value={experience.companyName}  onChange={handleChange} placeholder="Company Name" name="companyName" />
            <label htmlFor="positionTitle">Position Title</label>
            <input type="text" placeholder="Position Title" onChange={handleChange} value={experience.positionTitle} name="positionTitle"/>
            <label htmlFor="expStartDate">Start Date</label>
            <input type="text" name="expStartDate" onChange={handleChange} value={experience.expStartDate} id="" placeholder="Start Date" />
            <label htmlFor="expEndDate">End Date</label>
            <input type="text" name="expEndDate" onChange={handleChange} value={experience.expEndDate} id="" placeholder="End Date" />
            <button onClick={ () => {
                 handleAdd({...experience,id:(Math.random()*10000)})
                 setExperience({
                    "companyName": "",
                    "positionTitle": "",
                    "expStartDate": "",
                    "expEndDate": "",
                    "id":"",
            
            
                })
            
                }
                 
                 
                 
                }>Add</button>
        </div>
    )
}

function ExperienceItems ({items,onDeleteButtonClicked}) {
    let experienceElements = items.map(item => {
        return (
            <div  className="educationItem" key={item.id}>
            <div className="educationItemHeaderContainer">
                <div className="educationItemHeader"  id={item.id} onClick={()=>{}} >{item.companyName}</div>
                <img src={deleteUrl} onClick={()=>onDeleteButtonClicked(item)} className="deleteIcon" alt=""/>
            </div>
            <hr className="divider" />
            </div>
        )
    })
    return experienceElements
}