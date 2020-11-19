import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SubNavbar from './Components/Navbar/SubNavbar';
import Article from './Components/Forum/Article';
import ArticleList from './Components/Forum/ArticleList';
import './App.css';

const menu = [
  { text: 'Home', icon: 'home', link: '/' },
  { text: 'Home', icon: 'home', link: '/' },
  { text: 'Home', icon: 'home', link: '/' },
  { text: 'Forum', icon: 'forum', link: '/topics' },
];

function App() {
  return (
    <div className='flex_ lightgreyBackground' style={{ height: '100vh', width: '100%' }}>
      <div style={{ width: 300 }}>
        <Navbar menu={menu} />
      </div>
      <div>
        <SubNavbar title={menu.text} />
        <div style={{ padding: 40 }}>
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/topics' history component={ArticleList} />
            <Route path='/topics/:id' component={Article} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
