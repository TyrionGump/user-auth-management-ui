import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import DashBoard from './pages/DashBoard.jsx';
import AppLayout from './ui/AppLayout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path={'dashboard'} element={<DashBoard />} />
        </Route>

        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
