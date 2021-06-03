import { Avatar, Chip, Paper } from '@material-ui/core';
import React from 'react';
import './UsersCard.scss';

export default function UsersCard() {
    return (
        <>
            <div className='user-card-bloc'>
                <div className='user-card-container'>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                    <Paper className='user-card'>
                        <h5 className='user-card-name blue'>Jane Doe</h5>
                        <div className='user-card-avatar'>
                            <Avatar />
                        </div>
                        <p className='user-card-school'>La Sorbonne</p>
                        <div className='user-card-tag'>
                            <Chip label='tag' variant='outlined' />
                            <Chip label='tag' variant='outlined' />
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}