import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Avatar, Container, Chip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import RestoreIcon from '@material-ui/icons/Restore';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
        topics.map((topic) => (
          <Container>
            <Paper onClick={() => goToPage(topic._id)}>
              <Avatar />
              <h3>User 1</h3>
              <h4 className='color-h4'>How to get my javascript project ?</h4>
              <p className='Paper-block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Paper elevation={3} />
              <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
              Date of publication : 18 Nov 2020
              <br></br>
              <Chip label='javascript' variant='outlined' color='primary' />
              <Button variant='contained' color='primary'>
                I answer !
              </Button>
              <ThumbUpAltIcon />
              <ShareIcon />
            </Paper>
          </Container>
        ))}
    </div>
  );
}

export default ArticleList;
