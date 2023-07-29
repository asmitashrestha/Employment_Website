import { Link } from 'react-router-dom'
// import { Link } from '@mui/material'
import '../../index.css'

const Navbar = () => {
  return (
    <div className="navs">
      <div className="navbar">
       <Link to='/'>JobsPortal</Link>
      </div>
      <div className="navbar">
        <Link to='/login' className='posts'>Login</Link>
        <Link to='/postjob' className='post'>Post a job</Link>
      </div>
    </div >
  )
}

export default Navbar