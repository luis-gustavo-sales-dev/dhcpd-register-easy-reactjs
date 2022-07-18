import { ReactNode } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoardScreen from './screen/DashBoardScreen';
import DevicesScreen from './screen/DevicesScreen';
import GroupsScreen from './screen/GroupsScreen';

interface AppRoutesProps {
  children: ReactNode
}



export const AppRoutes = function({ children }: AppRoutesProps) {
  return (
      <BrowserRouter>
        {children}
        <Routes>
          <Route path='/' element={<DashBoardScreen />} />
          <Route path='/devices' element={<DevicesScreen />} />
          <Route path='/groups' element={<GroupsScreen />} />
        </Routes>
      </BrowserRouter>
  );
}