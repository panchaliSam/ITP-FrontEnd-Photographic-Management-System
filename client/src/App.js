import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and compoenets
// import Home from './pages/Home'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import UserSelectPhotos from './pages/UserSelectPhotos'
import Footer from './components/Footer'
import HomeGallery from './components/homePageGallery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        {/* <Sidebar/> */}
        <HomeGallery/>
          <div className="pages">
          <Routes>
            {/* <Route
              path='/'
              element={<Home />}
            /> */}
            <Route
              path='/api/eventPhotoAlbum/photos/65f285703a6187d5d7cb6f30'
              element={<UserSelectPhotos />}
            />
          </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
