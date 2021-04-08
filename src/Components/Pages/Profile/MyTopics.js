import React from 'react';
import { Chip, Paper } from '@material-ui/core';
import './Profile.scss';

export default function MyTopics() {
    return (
        <>
            <div className='profile-topic-container'>
                <h4 className='blue profile-h4'>My Topics</h4>
                <Paper>
                    <h5 className='blue'>It is a topic subject</h5>
                    <p>Mon 18 march 2020</p>
                    <Chip label='tag' variant='outlined' />
                    <Chip label='tag' variant='outlined' />
                    <Chip label='tag' variant='outlined' />
                </Paper>
                <Paper>
                    <h5 className='blue'>It is a topic subject</h5>
                    <p>Mon 18 march 2020</p>
                    <Chip label='tag' variant='outlined' />
                </Paper>
                <Paper>
                    <h5 className='blue'>It is a topic subject</h5>
                    <p>Mon 18 march 2020</p>
                    <Chip label='tag' variant='outlined' />
                    <Chip label='tag' variant='outlined' />
                </Paper>
            </div>
        </>
    )
}