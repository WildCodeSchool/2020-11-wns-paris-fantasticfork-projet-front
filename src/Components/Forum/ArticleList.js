import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Chip, Icon, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

function ArticleList({ history }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/topics')
      .then((res) => {
        setTopics(res.data.body);
      })
      .catch((err) => console.log(err));
  }, []);

  const goToPage = (topic_id) => {
    history.push(`/topics/${topic_id}`);
  };

  return (
    <div>
      {topics &&
        topics.map((topic) => {
          return (
            <div style={{ margin: 20 }}>
              <Paper onClick={() => goToPage(topic._id)} style={{ padding: 30, paddingRight: 50, paddingLeft: 50 }} elevation={3}>
                <div className='flex_' style={{ alignItems: 'center', marginBottom: 20 }}>
                  <Typography variant='h5' gutterBottom className='blue'>
                    {topic.subject ? topic.subject : ''}
                  </Typography>
                  <div style={{ flex: 1 }} />
                  <Icon className='blue' style={{ marginRight: 15 }}>
                    thumb_up
                  </Icon>
                  <Icon className='blue' style={{ marginRight: 15 }}>
                    share
                  </Icon>
                </div>

                <Typography variant='body2' gutterBottom>
                  {topic.body}
                </Typography>
                <Paper elevation={3} />

                <div className='flex_' style={{ alignItems: 'center', marginTop: 20 }}>
                  <Avatar style={{ width: 30, height: 30, backgroundColor: 'orange', marginRight: 5 }} />
                  <Typography variant='button' className='blue' style={{ marginRight: 10 }}>
                    {topic.username}
                  </Typography>
                  <Typography variant='overline' className='lightgrey'>
                    {topic.date.split('T')[0]}
                  </Typography>
                  <div style={{ flex: 1 }} />
                  {topic.tags.length > 0 &&
                    topic.tags.map((t, idx) => (
                      <Chip key={idx} label={t} variant='outlined' style={{ marginRight: 5 }} color={idx % 2 === 0 ? 'primary' : 'secondary'} />
                    ))}
                </div>
              </Paper>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
