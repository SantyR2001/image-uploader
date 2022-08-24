import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectorImage from './components/UploadImages/ImageSelector';
import Gallery from './components/Gallery/ShowImages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/select-image' element={<SelectorImage />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='*' element={ 
        <h1 className='text-danger text-center mt-5'> 404: page not found </h1> 
      }/>
    </Routes>
  );
}

export default App;
