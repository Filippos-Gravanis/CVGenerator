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

  console.log(info)
  return (
    <div className='main'>
    <Header/>
    <div className='content'>
    <div className='cvEdit'>
    <BasicInfo setName={setName} info={info} setSurname={setSurname} setEmail={setEmail} />
    <EducationInfo/>
    <ExperienceInfo/>
    </div>
    <div className="cvView">

    </div>
    </div>
    </div>


  )
    }

export default App
