import React from 'react';
import Navbar from '../Components/Common/Navbar/Navbar';
import SubNavbar from '../Components/Common/Navbar/SubNavbar';

export default function Authenticated({ children, title }) {
  return (
    <>
      <div style={{flexShink: 0, height: '100%', flexDirection: 'column', display: 'flex'}}>
        <Navbar className='lightgreyBackground'/>
      </div>
      <div className='lightgreyBackground' style={{ width: '100%', flexDirection:'column' }}>
        <SubNavbar title={title} />
        <div className='pageContainer'>{children}</div>
      </div>
    </>
  );
}
