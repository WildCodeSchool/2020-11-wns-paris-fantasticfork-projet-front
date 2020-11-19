// import Article from './Components/Forum/Article';
// import ArticleList from './Components/Forum/ArticleList';
import TopicForm from './Components/Forum/TopicForm';
import TopicModal from './Components/Forum/TopicModal';

import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', backgroundColor: '#FCFCFC' }}>
      <div style={{ width: 500 }}>navbar</div>
      <div style={{ padding: 40 }}>
        <TopicForm />
        <TopicModal />
        {/* <ArticleList /> */}
      </div>
    </div>
  );
}

export default App;
