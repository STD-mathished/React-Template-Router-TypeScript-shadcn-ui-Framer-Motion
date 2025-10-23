import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router";
import './index.css'
import App from './App.tsx'
import NotFound from './pages/notFound.tsx';
import License from './pages/license.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/license" element={<License />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
