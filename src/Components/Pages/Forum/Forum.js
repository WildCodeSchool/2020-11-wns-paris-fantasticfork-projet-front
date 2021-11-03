import React from 'react';
import { Chip, Icon, Typography, Paper } from '@material-ui/core';
import getDateFromTimestamp from './helpers/dates';
import './Forum.scss'

function Forum({ topics, goToPage }) {
  return (
    <div className='Forum'>

      {topics &&
        topics.map((topic) => (
          /* eslint no-underscore-dangle: 0 */
          <div className="single-topic" key={topic._id} style={{ margin: 20 }}>
            <Paper
              onClick={() => goToPage(topic._id)}
              style={{ padding: 30, paddingRight: 50, paddingLeft: 50 }}
              elevation={3}
            >
              <div className='flex_' style={{ alignItems: 'center'}}>
                <Typography variant='h5' gutterBottom className='blue'>
                  {topic.subject ? topic.subject : ''}
                </Typography>
                <div style={{ flex: 1 }} />

                {/* <Icon className='blue' style={{ marginRight: 15 }}>
                  share
                </Icon> */}
              </div>


              <div className="row">
                <div className="author">
                  {/* <Avatar style={{ width: 30, height: 30, backgroundColor: 'orange', marginRight: 5 }} /> */}
                  <Typography variant='button' className='blue' style={{ marginRight: 10 }}>
                    {topic.username}
                  </Typography>
                </div>

                <div className="date">
                  <Typography variant='overline' className='lightgrey'>
                    {getDateFromTimestamp(topic.createdAt)}
                  </Typography>
                </div>
              </div>

              <Typography variant='body2' gutterBottom>
                {topic.body}
              </Typography>
              <Paper elevation={3} />

              <div className="topic-data">
                <div className="tags">
                  {topic.tags.length > 0 &&
                    topic.tags.map((t, idx) => (
                      <Chip
                        key={t}
                        label={t}
                        variant='outlined'
                        style={{ marginRight: 5 }}
                        color={idx % 2 === 0 ? 'primary' : 'secondary'}
                      />
                    ))}
                </div>
                

                <div className="buttons-container">
                  <div className="buttons">
                    <div className="like-count">
                      <div style={{ marginRight: 5 }}>{topic.likes.length ? topic.likes.length : '0'}</div>
                      <Icon className='blue' style={{ height: '100%' }}>
                        thumb_up
                      </Icon>
                    </div>
                    <div className="comment-count">
                      <div>{topic.comments && topic.comments.length}</div>
                      <div>
                        <Icon className='blue' style={{ marginLeft: 5, height: '100%', paddingTop: 5 }}>comment</Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </Paper>
          </div>
        ))}
    </div>
  );
}

export default Forum;
