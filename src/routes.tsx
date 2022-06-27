import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoard from './screen/DashBoard';



export const AppRoutes = function() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}