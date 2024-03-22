import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page404 from './components/page404/Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Page1 />} />
            <Route path="two" element={<Page2 />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
