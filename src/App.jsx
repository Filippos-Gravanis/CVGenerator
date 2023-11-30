import { useState } from 'react'
import './App.css'
import Header from "./header.jsx"
import BasicInfo from './BasicInfo.jsx'
import EducationInfo from "./EducationInfo.jsx"
import ExperienceInfo from './ExperienceInfo.jsx'
function App() {

  return (
    <div className='main'>
    <Header/>
    <div className='content'>
    <div className='cvEdit'>
    <BasicInfo/>
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
