import { Typography, Badge, Icon } from '@material-ui/core';

export default function SubNavbar({ title }) {
  return (
    <div
      className='flex_'
      style={{
        width: '100%',
        height: 70,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottom: ' 1px solid #3f51b5',
        position: 'fixed',
        zIndex: 4,
      }}
    >
      <Typography variant='h4' gutterBottom style={{ marginLeft: 60 }} className='blue'>
        Forum
      </Typography>
      <div style={{ flex: 1 }} />
      <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 100 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 50 }}>
        <Icon>mail</Icon>
      </Badge>
    </div>
  );
}
