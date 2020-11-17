import Article from './Components/Forum/Article';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        backgroundColor: '#FCFCFC',
      }}
    >
      <div style={{ width: '20%' }}></div>
      <div>
        <Article />
      </div>
      <div style={{ width: '20%' }}></div>
    </div>
  );
}

export default App;
