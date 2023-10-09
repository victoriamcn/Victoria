import React from 'react'
import ResumePDF from '../../assets/resume/VictoriaMcNorrillResume2023-NoContactInfo.pdf'
import TechSkills from '../utils/techSkills'

const Resume = () => {
    return (
        <section id="resume" className="" >
            <p className="title">RESUME</p>
            <div className="">
                <a href={ResumePDF} target="_blank" rel="noreferrer"><button className="button subtitle">Click to View</button></a>
            </div>
            <div className="">
                <p className="">Proficiencies</p>
                <TechSkills/>
            </div>

        </section>
    )
}

export default Resume;