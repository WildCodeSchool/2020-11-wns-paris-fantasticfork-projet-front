import React, { useState } from 'react';
import { Paper, Button, Icon, Avatar, Chip, Typography, Link, IconButton } from '@material-ui/core';
import Comment from './Comment';
import NewComment from './NewComment';
import sampleImage from '../../images/cat.jpg';
import './Article.css';

function Article() {
  const [heart, setHeart] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    <div className='Article'>
      <Paper className='Article_container' elevation={3}>
        <div className='Article_header'>
          <Typography variant='h2'>I have a question</Typography>
          <div className='Article_id'>
            <Avatar src={sampleImage} />
            <div className='flex_column' style={{ marginLeft: 10 }}>
              <Typography variant='button' className='blue'>
                Simba
              </Typography>
              <Typography variant='caption' className='lightgrey'>
                Posted on
                <span className='lightgrey bold'> 17 Nov 2020</span>
              </Typography>
            </div>
          </div>

          <div className='Article_borderline' />
          <Typography variant='body1' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis magna risus, ac auctor ipsum euismod vel. Vivamus eu massa elit.
            Donec mattis dui non bibendum laoreet. Phasellus pharetra luctus ultrices. Nunc dictum, est vitae efficitur luctus, risus dolor fermentum
            ligula, non maximus justo ante sed risus. Nullam pharetra suscipit eleifend. Cras eu neque a nisl imperdiet facilisis in eget leo. Donec
            fermentum et dui ac accumsan. Nunc eget metus eu urna eleifend tincidunt eget vel ligula. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Nam quis purus finibus, molestie turpis sed, mattis mi. Donec lacus ex, aliquet in luctus sed, ullamcorper nec libero. In sit
            amet feugiat quam. Nullam rhoncus eleifend mauris, et condimentum ligula placerat eu. Nulla a dignissim ipsum. Nunc feugiat lacus sit amet
            tincidunt tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at aliquet diam.
            Vivamus nec faucibus nunc. In hac habitasse platea dictumst. Suspendisse id aliquet libero.
          </Typography>
          <Link className='Article_link' href='https://odyssey.wildcodeschool.com/' target='_blank' rel='noopener noreferrer'>
            <Icon style={{ paddingRight: 10 }}>link</Icon>
            https://odyssey.wildcodeschool.com/
          </Link>
          <div className='Article_borderline' />
          <div className='flex_'>
            <div>
              <Chip label='nodejs' variant='outlined' color='primary' />
              <Chip label='graphql' variant='outlined' olor='secondary' />
              <Chip label='javascript' variant='outlined' color='primary' />
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
          3 Answers
        </Typography>
        <div style={{ flex: 1 }} />
        <IconButton color='primary' onClick={() => setToggle(!toggle)}>
          <Icon className='lightgrey'>{toggle ? 'expand_less' : 'expand_more'}</Icon>{' '}
        </IconButton>
      </div>
      {toggle && (
        <>
          <Comment date={'01/10/2025'} name={'Mufasa'} message={'I am your father'} best={true} />
          <Comment date={'01/10/2025'} name={'Mufasa'} message={'I am your father'} />
          <Comment date={'01/10/2025'} name={'Mufasa'} message={'I am your father'} />
        </>
      )}
      <NewComment />
    </div>
  );
}

export default Article;