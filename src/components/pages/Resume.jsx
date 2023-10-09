// eslint-disable-next-line no-unused-vars
import React from 'react'
import ResumePDF from '../../assets/resume/VictoriaMcNorrillResume2023-NoContactInfo.pdf'
import TechSkills from '../utils/techSkills'

const Resume = () => {
    return (
        <section id="resume" className="">
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">RESUME</h2>
                    <p>Contact information and references Available Upon Request</p>
                    <div className="card-actions justify-end">
                    <a href={ResumePDF} target="_blank" rel="noreferrer">
                        <button className="btn btn-primary">Click to View Resume</button>
                     </a>
                     <a href="https://www.linkedin.com/in/victoria-mcnorrill/" target="_blank" rel="noreferrer">
                     <button className="btn btn-info">LinkedIn</button>
                     </a>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                <h2 className="card-title">PROFICIENCIES</h2>
                <TechSkills/>
                </div>
            </div>

        </section>
    )
}

export default Resume;