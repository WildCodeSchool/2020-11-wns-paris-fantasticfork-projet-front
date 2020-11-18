import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Button, Icon, Avatar, Chip, Typography, Link, IconButton } from '@material-ui/core';
import Comment from './Comment';
import NewComment from './NewComment';
import sampleImage from '../../images/cat.jpg';
import './Article.css';

const initSchema = {
  username: '',
  subject: '',
  body: '',
  date: '',
  url: [],
  tags: [],
  responses: [
    {
      date: '',
      name: '',
      message: '',
    },
  ],
};

function Article({ match }) {
  const [heart, setHeart] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [topic, setTopic] = useState(initSchema);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topic/${match.params.id}`)
      .then((res) => {
        console.log(res.data.body);
        setTopic(res.data.body);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <div className='Article'>
      <Paper className='Article_container' elevation={3}>
        <div className='Article_header'>
          <Typography variant='h2'>{topic.subject}</Typography>
          <div className='Article_id'>
            <Avatar src={sampleImage} />
            <div className='flex_column' style={{ marginLeft: 10 }}>
              <Typography variant='button' className='blue'>
                {topic.username}
              </Typography>
              <Typography variant='caption' className='lightgrey'>
                Posted on
                <span className='lightgrey bold'> {topic.date.split('T')[0]}</span>
              </Typography>
            </div>
          </div>

          <div className='Article_borderline' />
          <Typography variant='body1' gutterBottom>
            {topic.body}
          </Typography>
          {topic.url.length > 0 &&
            topic.url.map((u) => (
              <Link key={u} className='Article_link' href={u} target='_blank' rel='noopener noreferrer'>
                <Icon style={{ paddingRight: 10 }}>link</Icon>
                {u}
              </Link>
            ))}
          <div className='Article_borderline' />
          <div className='flex_'>
            <div>
              {topic.tags.length > 0 &&
                topic.tags.map((t, idx) => (
                  <Chip key={idx} label={t} variant='outlined' style={{ marginRight: 5 }} color={idx % 2 === 0 ? 'primary' : 'secondary'} />
                ))}
            </div>
            <div style={{ flex: 1 }} />
            <Button>
              <Icon className='blue' style={{ marginRight: 5 }}>
                thumb_up
              </Icon>
              3
            </Button>
            <Button>
              <Icon
                onClick={() => {
                  setHeart(!heart);
                }}
                className='red'
                style={{ marginRight: 5 }}
              >
                {heart ? 'favorite' : 'favorite_border'}
              </Icon>
              {heart ? '50' : '49'}
            </Button>
          </div>
        </div>
      </Paper>
      <div className='Article_comment_info' elevation={0}>
        <Icon className='blue'>comment</Icon>
        <Typography variant='button' className='blue' style={{ marginLeft: 10 }}>
          {topic.responses.length} Answers
        </Typography>
        <div style={{ flex: 1 }} />
        <IconButton color='primary' onClick={() => setToggle(!toggle)}>
          <Icon className='lightgrey'>{toggle ? 'expand_less' : 'expand_more'}</Icon>{' '}
        </IconButton>
      </div>
      {toggle && (
        <>
          {topic.responses.length > 0 &&
            topic.responses.map((res, idx) => (
              <Comment key={res._id} date={res.date.split('T')[0]} name={res.name} message={res.message} best={idx === 0 ? true : null} />
            ))}
        </>
      )}
      <NewComment />
    </div>
  );
}

export default Article;
