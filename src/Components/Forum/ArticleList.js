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
        console.log(res.data.body);
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
              <Paper onClick={() => goToPage(topic._id)} style={{ padding: 30 }} elevation={3}>
                <Avatar />
                <h3>{topic.username}</h3>
                <h4 className='color-h4'>{topic.subject ? topic.subject : ''}</h4>
                <Typography variant='body1' gutterBottom>
                  {topic.body}
                </Typography>
                <Paper elevation={3} />
                <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
                  <Icon>restore</Icon> Date of publication : 18 Nov 2020
                </div>
                <div className='flex_' style={{ padding: 20 }}>
                  {topic.tags.length > 0 &&
                    topic.tags.map((tag, idx) => <Chip key={idx} label={tag} variant='outlined' color='primary' style={{ marginRight: 5 }} />)}
                  <div style={{ flex: 1 }} />
                  <Icon>thumb_up</Icon>
                  <Icon>share</Icon>
                </div>
              </Paper>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
