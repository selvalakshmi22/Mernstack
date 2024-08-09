import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: "home", element: <Home/>}
    { path: "About", element: <About/>}
  ]
)
function App() {
  const getUser = ()=>{

  }
  return (
    <div>
      <Home></Home>
      <About></About>
      <button onclick = {getUser}>click to get user list</button>
    </div>
  );
}

export default App;
