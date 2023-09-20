import LocationOnIcon from "@mui/icons-material/LocationOn";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Jobavailable = ({ para, title }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  },[])
  
  return (
    <div className="pop-list">
      <div className="circle">
        <p>J</p>
      </div>
      <div className="desc">
        <p className="para">{para}</p>
        <h1 className="tit-desc">{title}</h1>
        <div className="location">
          <p>
            <span className="loc">
              <LocationOnIcon /> Naikap,Ktm
            </span>
            <span className="time">
              <FullscreenExitIcon />  Full Time
            </span>
            <span>
              Ksh 9,00,000
            </span>
          </p>
        </div>
      </div>

      <div className="btn-view">
        <Link to='/viewdetails' className="view-btn">
          View Details
        </Link>

      </div>
    </div>
  );
};

export default Jobavailable;