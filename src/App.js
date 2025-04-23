import './App.scss';
import Intro from './pages/intro/page/intro.jsx';
import Main from './pages/main/page/main.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/game" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
