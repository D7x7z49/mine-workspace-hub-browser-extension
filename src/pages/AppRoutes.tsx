import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@workspacehub/pages/Home';
import TestPage from '@workspacehub/pages/tests/TestPage';
import TestLayout from '@workspacehub/pages/tests/TestLayout';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="index.html" element={<Home />} />
      <Route path="/test/main" element={<TestPage />} />
      <Route path="/test/TestLayout" element={<TestLayout />} />
    </Routes>
  </Router>
);

export default AppRoutes;
