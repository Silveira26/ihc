import { Route, Routes} from 'react-router-dom';
import UserPage from './Screens/UserPage';
import GamePage from './Screens/GamePage';
import TopGames from './Screens/TopGames';
import MyList from './Screens/MyList';
import FriendPage from './Screens/FriendPage';
import Search from './Screens/Search';
import Login from './Screens/Login';
import Similar from './Screens/Similar';
import Home from './Screens/Home';


export default function App() {
  return (
    <div>
      <Routes>

          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="FriendPage" element={<FriendPage />} />
          <Route path="GamePage" element={<GamePage />} />
          <Route path="TopGames" element={<TopGames />} />
          <Route path="MyList" element={<MyList />} />
          <Route path="Search" element={<Search />} />
          <Route path="Login" element={<Login />} />
          <Route path="Similar" element={<Similar />} />
      </Routes>
    </div>
  );
}
