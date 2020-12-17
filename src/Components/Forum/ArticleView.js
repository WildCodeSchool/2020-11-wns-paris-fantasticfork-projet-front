import React from 'react';
import { Paper, Button, Icon, Avatar, Chip, Typography, Link, IconButton } from '@material-ui/core';
import Comment from './Comment';
import NewComment from './NewComment';
import sampleImage from '../../images/cat.jpg';

const ArticleView = (props) => {
  const { data, heart, setHeart, setToggle, toggle, toggleWrite, setToggleWrite, setNewMessage } = props;
  return (
    <div className='Article'>
      <Paper className='Article_container' elevation={3}>
        <div className='Article_header'>
          <Typography variant='h2'>{data.subject}</Typography>
          <div className='Article_id'>
            <Avatar src={sampleImage} />
            <div className='flex_column' style={{ marginLeft: 10 }}>
              <Typography variant='button' className='blue'>
                {data.username}
              </Typography>
              <Typography variant='caption' className='lightgrey'>
                Posted on
                <span className='lightgrey bold'> {data.date.split('T')[0]}</span>
              </Typography>
            </div>
          </div>
          <div className='Article_borderline' />
          <Typography variant='body1' gutterBottom>
            {data.body}
          </Typography>
          {data.url.length > 0 &&
            data.url.map((u) => (
              <Link key={u} className='Article_link' href={u} target='_blank' rel='noopener noreferrer'>
                <Icon style={{ paddingRight: 10 }}>link</Icon>
                {u}
              </Link>
            ))}
          <div className='Article_borderline' />
          <div className='flex_'>
            <div>
              {data.tags.length > 0 &&
                data.tags.map((t, idx) => (
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
              <Icon onClick={() => setHeart(!heart)} className='red' style={{ marginRight: 5 }}>
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
          {data.responses.length} Answers
        </Typography>
        <div style={{ flex: 1 }} />
        {!toggleWrite && (
          <Button
            style={{ marginRight: 20 }}
            variant='contained'
            color='primary'
            onClick={() => {
              setToggleWrite(true);
            }}
          >
            Write a comment
          </Button>
        )}
        <IconButton color='primary' onClick={() => setToggle(!toggle)}>
          <Icon className='lightgrey'>{toggle ? 'expand_less' : 'expand_more'}</Icon>{' '}
        </IconButton>
      </div>
      {toggleWrite && <NewComment topic_id={data._id} uploaded={() => setNewMessage(true)} />}
      {toggle && (
        <>
          {data.responses.length > 0 &&
            data.responses.map((res, idx) => (
              <div key={idx}>
                <Comment date={res.date && res.date.split('T')[0]} name={res.name} message={res.message} best={idx === 0 ? true : null} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ArticleView;
