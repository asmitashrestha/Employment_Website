import React from 'react'
import Jobcreate from './Jobcreate'

const Categoryname = () => {
  return (
    <div>
      <Jobcreate cname ="Company Name" cweb="Company Website" jtitle="Job Title" jcategory="Job Category" jtype="Job Type" 
      jlocation="Job Location" srange="Salary Range" exp="Experience" qua="Qualification" dline="Application Deadline" 
      japp="Job Application Link" jdes="Job Description"
      />
    </div>
  )
}

export default Categoryname