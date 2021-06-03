import React from 'react';
import { Avatar } from '@material-ui/core';
import './Profile.scss';

export default function PersonnalInformations() {
    return (
        <>
            <div className='personnal-information-container'>
                <h1 className='blue'>John Stud</h1>
                <h4 style={{ margin: 5 }}>Harvard</h4>
                <h5 style={{ margin: 0 }}>10/12/2000</h5>
                <h4 style={{ margin: 5 }}>Intérêts</h4>
                <p style={{ margin: 0 }}>Le vélo, les animés, les balades sur la plage</p>
            </div>
            <div>
                <Avatar className='profile-my-avatar' />
            </div>
        </>
    )
}