import LocationOnIcon from "@mui/icons-material/LocationOn";
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Jobavailable = ({ para, title,salary }) => {
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
              Ksh {salary}
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