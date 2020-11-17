import { Paper, Icon, Avatar, TextField, IconButton } from '@material-ui/core';

export default function NewComment({ reply }) {
  return (
    <div style={{ display: 'flex' }}>
      {reply && (
        <div style={{ margin: 20, paddingLeft: 20 }}>
          <Icon style={{ color: '#9e9e9e' }}>subdirectory_arrow_right</Icon>
        </div>
      )}
      <Paper style={{ margin: 20, padding: 40, paddingRight: 30, display: 'flex', flex: 1, alignItems: 'flex-start' }} elevation={3}>
        <Avatar style={{ backgroundColor: '#673ab7' }}>M</Avatar>
        <TextField id='Comment' label='Comment' multiline rows={4} variant='outlined' style={{ flex: 1, marginLeft: 15, marginRight: 15 }} />
        <IconButton style={{ marginRight: 0 }} color='primary'>
          <Icon>create</Icon>
        </IconButton>
      </Paper>
    </div>
  );
}
