import { Routes, Route } from 'react-router-dom';
import Vaults from './pages/Vaults';
import Leaderboards from './pages/Leaderboards';
import MyPortfolio from './pages/MyPortfolio';
import WindProtectedYield from './componentsVault/WindProtectedYield';

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Vaults/>}/>
          <Route path='/leaderboards' element={<Leaderboards/>}/>
          <Route path='/myPortfolio' element={<MyPortfolio/>}/>
          <Route path='/windProtectedYield' element={<WindProtectedYield />}/>
        </Routes>
      </div>
    );
};

export default App;
