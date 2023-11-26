import "./InfoCards.css"
import imgurl from "./assets/arrow.svg"
export default function BasicInfo(){
    let isActive = false
    function showButtonHandler(){
        const showMenuButton = document.querySelector('.showMenuButton')
        const dropDownMenu = document.querySelector('.dropDownMenu')
        const container = document.querySelector('.container')
        if (showMenuButton.classList.contains('clicked')){
        showMenuButton.classList.remove('clicked')
        dropDownMenu.classList.remove('active')
        container.classList.remove('nobottomborder')
        }
        else{
            showMenuButton.classList.add('clicked')
            dropDownMenu.classList.add('active')
            container.classList.add('nobottomborder')
        }
    } 
    return (
        <div className="basicInfoContainer">
        <button onClick={showButtonHandler}  className="container">
            <p className="ButtonLabel" >Basic Info</p>
            <img className="showMenuButton" src={imgurl}></img>
        </button>
        <BasicInfoDropDown isActive={isActive} />
        </div>
    )

}


function BasicInfoDropDown(){
    return(
        <div className="dropDownMenu">
            <label htmlFor="">Name</label>
            <input type="text" name="Name" />
            <label htmlFor="">Surname</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" />
        </div>
    )
}