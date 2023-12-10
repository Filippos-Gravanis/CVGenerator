import "./cvView.css"
export function PersonalView ({info}) {
    if (info.name || info.email || info.surname || info.phoneNumber){
    
    return(
        <div>
        <h1 className="sectionHeader">Personal Info</h1>
        {info.name ? <p className="basicInfoPar">Name : &nbsp;  {info.name}</p> : null }
        {info.surname ? <p className="basicInfoPar">Surname : &nbsp;  {info.surname}</p> : null }
        {info.email ? <p className="basicInfoPar">Email : &nbsp;  {info.email}</p> : null }
        {info.phoneNumber ? <p className="basicInfoPar">Phone Number : &nbsp;  {info.phoneNumber}</p> : null }
        </div>
    )
    }
}

export function EducationView ({info}){
    let items = info.education.map(item => {
        return (
            <div key={item.id} className="educationItemContainer">
                <p className="educationDates" >{item.startDate}-{item.endDate}</p>
                <div>
                    <p>{item.titleOfStudy}</p>
                    <p>{item.institution}</p>
                    </div>
            </div>
        )
    })
    if (info.education.length > 0 ){
    return(
    <div>
        <h1 className="sectionHeader">Education Info</h1>
        {items}
    </div>
    )
    }
    else return null        
}

export function ExperienceView ({info}) {
    let items = info.experience.map(item => {
        return (
            <div key={item.id} className="educationItemContainer">
                <p className="educationDates" >{item.expStartDate}-{item.expEndDate}</p>
                <div>
                    <p>{item.positionTitle}</p>
                    <p>{item.companyName}</p>
                    </div>
            </div>
        )
    } )
    if (info.experience.length > 0 ){
        return(
        <div className="viewSection">
            <h1 className="sectionHeader">Experience Info</h1>
            {items}
        </div>
        )
        }
        else return null        
    
}