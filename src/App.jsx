import { useState } from 'react'
import './App.css'
import Header from "./header.jsx"
import BasicInfo from './BasicInfo.jsx'
import EducationInfo from "./EducationInfo.jsx"
import ExperienceInfo from './ExperienceInfo.jsx'
function App() {
  const [info,setInfo] = useState(
    {
      "name": "",
      "surname": "",
      "email":"",
      "education":[]
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

    function addEducation (education){
      console.log(info.education)
      setInfo({...info,education:info.education.concat(education)})
    }


  return (
    <div className='main'>
    <Header/>
    <div className='content'>
    <div className='cvEdit'>
    <BasicInfo setName={setName} info={info} setSurname={setSurname} setEmail={setEmail} />
    <EducationInfo handleAdd={addEducation} educationItems={info.education} />
    <ExperienceInfo/>
    </div>
    <div className="cvView">

    </div>
    </div>
    </div>


  )
    }

export default App
