import './App.css';
import useFetch from './hooks/http-hook';
function App() {
  const { data, loading, error } = useFetch('/posts', 'get');
  return (
    <div className='App'>
      <header className='App-header'>
        {data?.map((post) => {
          return <h1>{post.title}</h1>;
        })}
      </header>
    </div>
  );
}

export default App;
