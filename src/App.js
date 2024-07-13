import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './nav/Navbar'
import NavRoutes from './nav/NavRoutes'
import {UserProvider} from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <NavRoutes />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
