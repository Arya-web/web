import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Floating_Btn, Banner } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Floating_Btn />
              <div style={{height: '500px'}}></div>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
