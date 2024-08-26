import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@workspacehub/pages/Home';
import TestPage from '@workspacehub/pages/TestPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="index.html" element={<Home />} />
      <Route path="/" element={<TestPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
