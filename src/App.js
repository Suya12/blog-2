import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headers/Header';
import Content from './components/contents/Content';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Content />}></Route>

        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
