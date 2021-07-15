import React from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar/Navbar';
// import SubNavbar from '../Components/Common/Navbar/SubNavbar';
import { LOGOUT } from '../graphql/User';


export default function Authenticated({ children }) {
  const history = useHistory();
  const [logoutUser, { client }] = useMutation(LOGOUT);
  const handleLogout = async () => {
    await logoutUser();

    localStorage.setItem('stud-connect@userID', '');
    localStorage.setItem('stud-connect@token', '');
    localStorage.setItem('stud-connect@tokenExpiration', '');

    await client.resetStore();
    history.push('/');
  };

  return (
    <>
      <div style={{flexShink: 0, height: '100%', flexDirection: 'column', display: 'flex'}}>
        <Navbar className='lightgreyBackground' handleLogout={handleLogout} />
      </div>
      <div className='lightgreyBackground' style={{ width: '100%', flexDirection:'column' }}>
        {/* <SubNavbar title={title} handleLogout={handleLogout} /> */}
        <div className='pageContainer'>{children}</div>
      </div>
    </>
  );
}
