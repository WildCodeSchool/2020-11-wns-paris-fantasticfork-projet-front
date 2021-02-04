import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import SubNavbar from '../Components/Navbar/SubNavbar';

export default function Authenticated({ children, title }) {
  return (
    <div className='flex_ lightgreyBackground'>
      <div style={{ width: 200 }}>
        <Navbar />
      </div>
      <div className='lightgreyBackground' style={{ width: 'calc(100% - 200px)' }}>
        <SubNavbar title={title} />
        <div className='pageContainer'>{children}</div>
      </div>
    </div>
  );
}
