import { Link } from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
  return (
    <div className="navs">
      <div className="navbar">
       <Link to='/' style={{fontSize:"22px",color:"rgb(49, 83, 49)",fontWeight:"bold"}}>JobsPortal</Link>
      </div>
      <div className="navbar">
        <Link to='/login' className='posts'>Login</Link>
        <Link to='/postjob' className='post'>Post a job</Link>
      </div>
    </div >
  )
}

export default Navbar