import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
