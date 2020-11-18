import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Avatar, Container, Chip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

function ArticleList({ history }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/topics').then((res) => {
      console.log(res.data);
      setTopics(res.data.body);
      console.log(topics);
    });
  }, []);

  const goToPage = (topic_id) => {
    history.push(`/topics/${topic_id}`);
  };

  return (
    <div>
      <Container>
        <Paper onClick={() => goToPage('5fb4f8b489ff8dccc8b36728')}>
          <Avatar />
          <h3>User 1</h3>
          <h4 className='color-h4'>How to get my javascript project ?</h4>
          <p className='Paper-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
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
      <br></br>
      <br></br>
      <Container>
        <Paper>
          <Avatar />
          <h3>User 2</h3>
          <h4 className='color-h4'>My experience has how to get away with typescrit.</h4>
          <p className='Paper-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Paper elevation={3} />
          <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
          Date of publication : 14 Nov 2020
          <br></br>
          <Chip label='typescript' variant='outlined' color='secondary' />
          <Button variant='contained' color='primary'>
            I answer !
          </Button>
          <FavoriteIcon />
        </Paper>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Paper>
          <Avatar />
          <h3>User 3</h3>
          <h4 className='color-h4'>How can I find the resource from the last online course ?</h4>
          <p className='Paper-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Paper elevation={3} />
          <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
          Date of publication : 10 Nov 2020
          <br></br>
          <Chip label='ressources' variant='outlined' color='#81c784' />
          <Button variant='contained' color='primary'>
            I answer !
          </Button>
          <ThumbUpAltIcon />
        </Paper>
      </Container>
    </div>
  );
}

export default ArticleList;
