import Article from './Components/Forum/Article';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', backgroundColor: '#FCFCFC' }}>
      <div style={{ width: 500 }}>navbar</div>
      <div style={{ padding: 40 }}>
        <Article />
      </div>
    </div>
  );
}

export default App;
