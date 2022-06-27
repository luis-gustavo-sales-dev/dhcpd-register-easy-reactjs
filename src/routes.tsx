import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoard from './screen/DashBoardScreen';
import DevicesScreen from './screen/DevicesScreen';
import GroupsScreen from './screen/GroupsScreen';



export const AppRoutes = function() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/devices' element={<DevicesScreen />} />
        <Route path='/groups' element={<GroupsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}