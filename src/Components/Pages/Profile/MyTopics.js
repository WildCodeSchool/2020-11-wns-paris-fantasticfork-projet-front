import React from 'react';
import { Chip } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import './Profile.scss';

export default function MyTopics() {
    return (
        <>
            <div className='profile-topic-container'>
                <h4 className='blue profile-h4'>My Topics</h4>
                <div className='my-topics-container'>
                    <h5 className='blue profile-h5 topic-title'>It is a topic subject</h5>
                    <p className='my-topics-date'>Mon 18 march 2020</p>
                    <CommentIcon>12</CommentIcon>
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                </div>
                <div className='my-topics-container'>
                    <h5 className='blue profile-h5 topic-title'>It is a topic subject</h5>
                    <p className='my-topics-date'>Mon 18 march 2020</p>
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                </div>
                <div className='my-topics-container'>
                    <h5 className='blue profile-h5 topic-title'>It is a topic subject</h5>
                    <p className='my-topics-date'>Mon 18 march 2020</p>
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                </div>
                <div className='my-topics-container'>
                    <h5 className='blue profile-h5 topic-title'>It is a topic subject</h5>
                    <p className='my-topics-date'>Mon 18 march 2020</p>
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                    <Chip className='my-topics-tag' label='tag' variant='outlined' />
                </div>
            </div>
        </>
    )
}