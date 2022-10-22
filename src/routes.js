import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import EnterTheRoom from './pages/EnterTheRoom';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<EnterTheRoom />} />
            <Route path='/main' element={<Main />} />
        </Routes>
    );
}

export default MainRoutes;