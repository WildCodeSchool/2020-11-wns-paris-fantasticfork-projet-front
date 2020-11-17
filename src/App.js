import { Paper, Button, Icon } from '@material-ui/core';

function App() {
  return (
    <div style={{ width: '95%' }}>
      <Paper style={{ width: '100%', height: 50, margin: 20 }} elevation={3}>
        <Button>
          <Icon>add</Icon>
        </Button>
        article 1
      </Paper>
      <Paper style={{ width: '80%', height: 50, margin: 20 }} elevation={3}>
        article 1
      </Paper>
      <Paper style={{ width: '100%', height: 50, margin: 20 }} elevation={3}>
        article 1
      </Paper>
      <Paper style={{ width: '100%', height: 50, margin: 20 }} elevation={3}>
        article 1
      </Paper>
      <Paper style={{ width: '100%', height: 50, margin: 20 }} elevation={3}>
        article 1
      </Paper>
    </div>
  );
}

export default App;
