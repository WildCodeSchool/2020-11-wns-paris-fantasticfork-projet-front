import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Paper, Icon, Avatar, Chip, Typography, Button } from '@material-ui/core';
import './Comment.css';

// prettier-ignore
const UPDATE_COMMENT = gql`
  mutation updateComment(
    $commentId: ID!, 
    $commentBody: String, 
    $like: Int, 
    $dislike: Int, 
    ) {
      updateComment(
        commentId: $commentId, 
        commentBody: $commentBody, 
        like: $like, 
        dislike: $dislike, 
      ) {
          lastUpdateDate
        }
  }
`;

export default function Comment(props) {
  const { commentId, date, name, message, like, dislike, best, lastUpdateDate, refresh } = props;
  const [updateComment, { loading }] = useMutation(UPDATE_COMMENT);

  const addLike = () => {
    // console.log(executed);
    // const likeNumber = like ? like + 1 : 1;
    // updateComment({ variables: { commentId: commentId, like: likeNumber } });
    refresh();
  };

  return (
    !loading && (
      <>
        <Paper className='Comment_container' elevation={3}>
          <div className='flex_'>
            <Avatar alt={name} />
            <div className='flex_column' style={{ marginLeft: 10 }}>
              <Typography variant='button' className='blue'>
                {name}
              </Typography>

              <Typography variant='caption' className='lightgrey'>
                Posted on
                <span className='lightgrey'> {getDateFromTimestamp(date)}</span>
                {lastUpdateDate && (
                  <>
                    "Modified on"
                    <span className='lightgrey'> {getDateFromTimestamp(lastUpdateDate)}</span>
                  </>
                )}
              </Typography>
            </div>
            {best && (
              <>
                <div style={{ flex: 1 }} />
                <Chip icon={<Icon fontSize={'small'}>thumb_up_alt</Icon>} label='Best answer' color='primary' />
              </>
            )}
          </div>
          <div className='Comment_element'>
            <Typography variant='body1' gutterBottom>
              {message}
            </Typography>
          </div>
          <div className='Comment_like'>
            <Button onClick>
              <Icon className='blue' style={{ marginRight: 5 }} onClick={addLike}>
                thumb_up
              </Icon>
              {like && like}
            </Button>
            <Button>
              <Icon className='blue' style={{ marginRight: 5 }}>
                thumb_down
              </Icon>
              {dislike && dislike}
            </Button>
            <div className='flex1' />
            <Button size='small' className='Comment_editbutton' onClick={() => {}}>
              <Icon fontSize={'small'} className='Comment_editbutton_icon'>
                edit
              </Icon>
              edit
            </Button>
          </div>
        </Paper>
      </>
    )
  );
}

const getDateFromTimestamp = (timestamp) => {
  const date = new Date(Date(timestamp)).toLocaleDateString('fr-FR');
  const hours = new Date(Date(timestamp)).getHours('fr-FR');
  const minutes = new Date(Date(timestamp)).getMinutes('fr-FR');

  return `${date} - ${hours}:${minutes}`;
};
