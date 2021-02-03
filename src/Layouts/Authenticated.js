import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const menu = [
  { text: 'Home', icon: 'home', link: '/' },
  { text: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
  { text: 'My Class', icon: 'school', link: '/classroom' },
  { text: 'Forum', icon: 'forum', link: '/topics' },
  { text: 'Daily', icon: 'today', link: '/daily' },
];

export default function Authenticated({ children }) {
  return (
    <div className='flex_ lightgreyBackground'>
      <div style={{ width: 200 }}>
        <Navbar menu={menu} />
      </div>
      <div className='lightgreyBackground' style={{ width: 'calc(100% - 200px)' }}>
        {children}
      </div>
    </div>
  );
}
