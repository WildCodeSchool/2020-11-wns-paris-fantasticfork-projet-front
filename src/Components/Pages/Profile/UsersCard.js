import { Avatar, Chip, Paper } from '@material-ui/core';
import React from 'react';
import './UsersCard.scss';

export default function UsersCard() {
    return (
        <>
            <div className='user-card-bloc'>
                <div className='user-card-container'>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                    <Paper className='user-card'>
                        <h4 className='user-card-name blue'>Jane Doe</h4>
                        <p className='user-card-school'>La Sorbonne</p>
                        <Avatar className='user-card-avatar' />
                        <Chip label='tag' variant='outlined' />
                        <Chip label='tag' variant='outlined' />
                    </Paper>
                </div>
            </div>
        </>
    )
}