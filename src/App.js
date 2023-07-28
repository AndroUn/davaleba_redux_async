import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import routes from './router/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
