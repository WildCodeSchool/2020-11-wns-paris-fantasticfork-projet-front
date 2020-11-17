import React, { useState } from 'react';
import {
  Paper,
  Button,
  Icon,
  Avatar,
  Chip,
  Typography,
} from '@material-ui/core';
import sampleImage from '../../images/cat.jpg';

function Article() {
  const [heart, setHeart] = useState(true);
  return (
    <div style={{ width: '100%', backgroundColor: '#FCFCFC' }}>
      <Paper style={{ margin: 20, padding: 40, display: 'flex' }} elevation={3}>
        <div
          style={{
            flex: 1,
            margin: 20,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h2'>I have a question</Typography>
          <div style={{ display: 'flex', marginTop: 20 }}>
            <Avatar src={sampleImage} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}
            >
              <Typography variant='button' style={{ color: '#3f51b5' }}>
                Simba
              </Typography>
              <Typography variant='caption' style={{ color: '#9e9e9e' }}>
                Posted on
                <span style={{ fontWeight: 'bold' }}> 17 Nov 2020</span>
              </Typography>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              marginTop: 40,
              marginBottom: 40,
              borderBottom: '1px solid #CCCCCC',
            }}
          />
          <Typography variant='body' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lobortis magna risus, ac auctor ipsum euismod vel. Vivamus eu massa
            elit. Donec mattis dui non bibendum laoreet. Phasellus pharetra
            luctus ultrices. Nunc dictum, est vitae efficitur luctus, risus
            dolor fermentum ligula, non maximus justo ante sed risus. Nullam
            pharetra suscipit eleifend. Cras eu neque a nisl imperdiet facilisis
            in eget leo. Donec fermentum et dui ac accumsan. Nunc eget metus eu
            urna eleifend tincidunt eget vel ligula. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Nam quis purus finibus, molestie
            turpis sed, mattis mi. Donec lacus ex, aliquet in luctus sed,
            ullamcorper nec libero. In sit amet feugiat quam. Nullam rhoncus
            eleifend mauris, et condimentum ligula placerat eu. Nulla a
            dignissim ipsum. Nunc feugiat lacus sit amet tincidunt tincidunt.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin at aliquet diam. Vivamus nec faucibus
            nunc. In hac habitasse platea dictumst. Suspendisse id aliquet
            libero.
          </Typography>
          <div
            style={{
              flex: 1,
              marginTop: 40,
              marginBottom: 20,
              borderBottom: '1px solid #CCCCCC',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              <Chip label='nodejs' variant='outlined' color='primary' />
              <Chip label='graphql' variant='outlined' olor='secondary' />
              <Chip label='javascript' variant='outlined' color='primary' />
            </div>
            <div style={{ flex: 1 }} />
            <Button>
              <Icon style={{ color: '#3f51b5', marginRight: 5 }}>thumb_up</Icon>
              3
            </Button>
            <Button>
              <Icon
                onClick={() => {
                  setHeart(!heart);
                }}
                style={{ color: '#DC004E', marginRight: 5 }}
              >
                {heart ? 'favorite' : 'favorite_border'}
              </Icon>
              {heart ? '50' : '49'}
            </Button>
          </div>
        </div>
      </Paper>
      <Paper style={{ margin: 20, padding: 20 }} elevation={0}>
        <Button>
          <Icon style={{ color: '#3f51b5', marginRight: 5 }}>comment</Icon>3
        </Button>
        comments
      </Paper>
      <Paper style={{ height: 100, margin: 20 }} elevation={3}>
        comment
      </Paper>
      <Paper style={{ height: 100, margin: 20 }} elevation={3}>
        comment
      </Paper>
    </div>
  );
}

export default Article;
