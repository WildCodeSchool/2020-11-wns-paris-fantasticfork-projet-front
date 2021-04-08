import React from 'react';
import { Avatar } from '@material-ui/core';
import './Profile.scss';

export default function PersonnalInformations() {
    return (
        <>
            <div className='personnal-information-container'>
                <h1 className='blue'>John Stud</h1>
                <h3>Harvard</h3>
                <h3>10/12/2000</h3>
                <h3>Intérêts</h3>
                <p>Le vélo, les animés, les balades sur la plage</p>
            </div>
            <div>
                <Avatar className='profile-my-avatar' />
            </div>
        </>
    )
}