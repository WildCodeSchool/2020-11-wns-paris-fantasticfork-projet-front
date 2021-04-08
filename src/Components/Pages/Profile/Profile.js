import React from 'react';
import { Chip, Paper } from '@material-ui/core';
import UsersCard from './UsersCard';
import './Profile.scss';
import ProfileDescription from './ProfileDescription';
import PersonnalInformations from './PersonnalInformations';
import MyTopics from './MyTopics';

export default function Profile() {
    return (
        <div>
            <Paper className='profile-top-container'>
                <div className='profile-container' >
                    <PersonnalInformations />
                </div>
                <div className='profile-my-tags'>
                    <Chip
                        label='tag'
                        variant='outlined'
                    />
                </div>
            </Paper>
            <div className='profile-middle-container'>
                <Paper elevation={3} className='profile-bloc-container'>
                    <ProfileDescription />
                </Paper>
                <Paper className='profile-bloc-container'>
                    <MyTopics />
                </Paper>
            </div>
            <Paper className='profile-bottom-container' elevation={3}>
                <UsersCard />
            </Paper>
        </div >
    );
}
