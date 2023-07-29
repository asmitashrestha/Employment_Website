import React from 'react'
import { Link } from 'react-router-dom'


const Jobdesc = ({edu,exp,explen,location,deadline,salary}) => {
    const paraStyle ={
        fontSize:"14px",
        padding:"4px"
    }
    const textStyle ={
        fontWeight:"bold",fontSize:"17px"
    }
  return (
    <div className='apply-job'>
        <div className="btn-job">
            <Link to='/viewcompany' className='btn-jobs bg-green-950 text-white'>View Company</Link>
            <Link to='/applyjob' className='btn-jobs bg-green-950 text-white'>Apply This Job</Link>
        </div>
        <div className="qua-req">
            <p style={paraStyle}><span style={textStyle}>Minimum Qualification</span>: {edu}</p>
            <p style={paraStyle}><span style={textStyle}> Experience Level</span>: {exp}</p>
            <p style={paraStyle}><span style={textStyle}>Experience Length</span>: {explen}</p>
            <p style={paraStyle}><span style={textStyle}>Location</span>: {location}</p>
            <p style={paraStyle}><span style={textStyle}>Application Deadline</span>: {deadline}</p>
            <p style={paraStyle}><span style={textStyle}>Salary Range</span>: {salary}</p>
        </div>
      <div className="job-desc">
        <h2>Job description</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, at?  We are searching Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Accusantium rerum, dolore esse error fugit
              doloribus sapiente quos assumenda eaque dignissimos sintiure    
             quae et aliquam eos repudiandae cupiditate vel aspernatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nesciunt dignissimos at, minima repudiandae pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing
             elit. Consectetur, dolores. Asperiores ipsum consequuntur
              est ea pariatur excepturi, aut alias ullam quidem soluta 
              atque deserunt eligendi, rem commodi fugiat nemo voluptatem
               dolorum voluptates officiiscumque enim omnis necessitatibus ipsa. Quae, nam?</p>
             
      </div>

      <div className="dev-req">
        <h2>Laravel Developer Requirements :</h2>

        <div className="req-list">
            <ul>
                <li>A degree in programming computer science , or a related filed </li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
            </ul>
        </div>

        <div className="dev-res">
            <h2>Responsibilities :</h2>
            <div className="responsibility">
            <ul>
                <li>A degree in programming computer science , or a related filed </li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
                <li>A degree in programming computer science , or a related filed</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Jobdesc