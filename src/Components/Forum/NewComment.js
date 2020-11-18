import { Paper, Icon, Avatar, TextField, IconButton } from '@material-ui/core';
import './NewComment.css';

export default function NewComment({ reply }) {
  return (
    <div className='NewComment'>
      {reply && (
        <div className='NewComment_reply'>
          <Icon className='NewComment_reply_icon'>subdirectory_arrow_right</Icon>
        </div>
      )}
      <Paper className='NewComment_container' elevation={3}>
        <Avatar className='NewComment_avatar'>M</Avatar>
        <TextField id='Comment' label='Comment' multiline rows={4} variant='outlined' className='NewComment_textfield' />
        <IconButton style={{ marginRight: 0 }} color='primary'>
          <Icon>create</Icon>
        </IconButton>
      </Paper>
    </div>
  );
}
