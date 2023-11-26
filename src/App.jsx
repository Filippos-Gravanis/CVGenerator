import { useState } from 'react'
import './App.css'
import Header from "./header.jsx"
import BasicInfo from './BasicInfo.jsx'
import EducationInfo from "./EducationInfo.jsx"

function App() {

  return (
    <div className='main'>
    <Header/>
    <div className='content'>
    <div className='cvEdit'>
    <BasicInfo/>
    <EducationInfo/>
    </div>
    <div className="cvView">

    </div>
    </div>
    </div>


  )
    }

export default App
