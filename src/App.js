import { Switch, Route } from 'react-router-dom';
import Article from './Components/Forum/Article';
import ArticleList from './Components/Forum/ArticleList';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', backgroundColor: '#FCFCFC' }}>
      <div style={{ width: 500 }}>navbar</div>
      <div style={{ padding: 40 }}>
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/topics' history component={ArticleList} />
          <Route path='/topics/:id' component={Article} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
