import React from 'react';
import { Paper, Button, Icon, Avatar, Chip, Typography, Link, IconButton } from '@material-ui/core';
import sampleImage from '../../../../images/cat.jpg';
import getDateFromTimestamp from '../helpers/dates';
import './Topic.scss';

const Topic = (props) => {
  const { data, toggle, setToggle, toggleWrite, setToggleWrite, handleTopicLike, setModifyFormOpened } = props;
  // const [heart, setHeart] = useState(false);

  if (!data) {
    return null;
  }
  return (
    <div>
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
                <span className='lightgrey bold'> {getDateFromTimestamp(data.createdAt)}</span>
              </Typography>

              {data.updatedAt && data.updatedAt !== data.createdAt && (
                <Typography variant='caption' className='lightgrey'>
                  Last update
                  <span className='lightgrey bold'> {getDateFromTimestamp(data.updatedAt)}</span>
                </Typography>
              )}
            </div>
            <div style={{flex:1}}/>
            {data.authorID === localStorage.getItem('stud-connect@userID') && (
              <Icon onClick={() => setModifyFormOpened(true)}>create</Icon>
            )}

          </div>
          <div className='Article_borderline' />
          <Typography variant='body1' gutterBottom>
            {data.body}
          </Typography>
          {data.url?.length > 0 &&
            data.url.map((u) => (
              <Link key={u} className='Article_link' href={u} target='_blank' rel='noopener noreferrer'>
                <Icon style={{ paddingRight: 10 }}>link</Icon>
                {u}
              </Link>
            ))}
          <div className='Article_borderline' />
          <div className='flex_'>
            <div>
              {data.tags?.length > 0 &&
                data.tags.map((t, idx) => (
                  <Chip
                    key={t}
                    label={t}
                    variant='outlined'
                    style={{ marginRight: 5 }}
                    color={idx % 2 === 0 ? 'primary' : 'secondary'}
                  />
                ))}
            </div>

            <div style={{ flex: 1 }} />
            <Button onClick={handleTopicLike}>
              <Icon className='blue' style={{ marginRight: 5 }}>
                { data.likes.indexOf(localStorage.getItem('stud-connect@userID')) > -1
                  ? 'thumb_up'
                  : 'thumb_up_off_alt'
                }
              </Icon>
              <div className='likes-count'>{data.likes.length || '0'}</div>
            </Button>
            {/* <Button>
              <Icon onClick={() => setHeart()} className='red' style={{ marginRight: 5 }}>
                {heart ? 'favorite' : 'favorite_border'}
              </Icon>
              {heart ? '50' : '49'}
            </Button> */}
          </div>
        </div>
      </Paper>

      <div className='Article_comment_info' elevation={0}>
        <div className="comments-count">
          <Icon className='blue'>comment</Icon>
          <Typography variant='button' className='blue' style={{ marginLeft: 10 }}>
            {data.comments?.length} Answers
          </Typography>
        </div>
        <div className="comment-info-right">
          {!toggleWrite && ( 
            <Button
              className='addComment'
              variant='contained'
              color='primary'
              onClick={() => {
                setToggleWrite(true);
              }}
            >Write a comment</Button>
          )}
          <IconButton clasName="toggle-comments" color='primary' onClick={() => setToggle()}>
            <Icon className='lightgrey'>{toggle ? 'expand_less' : 'expand_more'}</Icon>{' '}
          </IconButton>
        </div>

      </div>
    </div>
  );
};

export default Topic;
