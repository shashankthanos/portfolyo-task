import React, { useEffect, useState } from 'react'
import '../Styles/Contact.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Contact = ({ data }) => {

  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`contact ${isVisible ? 'scroll-u' : ''}`}>
      <h1>Contact</h1><hr />
      <p>Get in touch</p>
      <div className="details">
        <div className="number">
          <LocalPhoneOutlinedIcon style={{ fontSize: '50px', color: "#ff714a" }} />
          {data.about && data.about.phoneNumber}
        </div>
        <div className="location">
          <LocationOnOutlinedIcon style={{ fontSize: '50px', color: "#ff714a" }} />
          {data.about && data.about.address}
        </div>
        <div className="email">
          <EmailOutlinedIcon style={{ fontSize: '50px', color: "#ff714a" }} />
          {data && data.email}
        </div>
        <div className="hire">
          <CheckCircleOutlineOutlinedIcon style={{ fontSize: '50px', color: "#ff714a" }} />
          Hire Available
        </div>
      </div>
      <div>
        <form action="" className='form'>
          <div className='textarea'>
            <input className='inputfield' placeholder='Full Name' type="text" /><br />
            <input className='inputfield' placeholder='Email Address' type="text" /><br />
            <input className='inputfield' placeholder='Subject' type="text" /><br />
            <button className='btn2'>Send Message</button>
          </div>
          <div className='textarea'>
            <textarea name="" id="textarea" placeholder='Message' cols="55" rows="11"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact