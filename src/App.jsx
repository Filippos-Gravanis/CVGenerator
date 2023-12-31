import { useState } from 'react'
import './App.css'
import Header from "./header.jsx"
import BasicInfo from './BasicInfo.jsx'
import EducationInfo from "./EducationInfo.jsx"
import ExperienceInfo from './ExperienceInfo.jsx'
import { PersonalView,EducationView,ExperienceView } from './cvView.jsx'
function App() {
  const [info,setInfo] = useState(
    {
      "name": "",
      "surname": "",
      "email":"",
      "phoneNumber":"",
      "education":[],
      "experience":[],
    }

  )
    function setName (name){
      setInfo({...info,name:name.target.value})
    }

    function setSurname (surname){
      setInfo({...info,surname:surname.target.value})
    }

    function setEmail (email){
      setInfo({...info,email:email.target.value})
    }

    function setPhoneNumber (phoneNumber){
      setInfo({...info,phoneNumber:phoneNumber.target.value})
    }

    function addEducation (education){
      console.log(info.education)
      setInfo({...info,education:info.education.concat(education)})
    }

    function addExperience (experience){
      setInfo({...info,experience:info.experience.concat(experience)})
    }

    function deleteEducation (id){
      console.log(id)
      info.education.forEach(element => {
        console.log(element.id,id)
      });
      setInfo({...info,education:info.education.filter(edu => edu.id != id )})
    }

    function deleteExperience (id) {
     setInfo ({...info , experience:info.experience.filter(exp => exp.id != id )})
    }


  return (
    <div className='main'>
    <Header/>
    <div className='content'>
    <div className='cvEdit'>
    <BasicInfo setName={setName} info={info} setSurname={setSurname} setEmail={setEmail} setPhoneNumber={setPhoneNumber} />
    <EducationInfo handleAdd={addEducation} deleteEducation={deleteEducation} educationItems={info.education} />
    <ExperienceInfo experienceItems={info.experience} handleAdd={addExperience} deleteExperience={deleteExperience} />
    </div>
    <div className="cvView">
    <PersonalView info={info}/>
    <EducationView info={info} />
    <ExperienceView info={info}/>
    </div>
    </div>
    </div>


  )
    }

export default App
