import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and compoenets
// import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import UserSelectPhotos from './pages/UserSelectPhotos'
import Footer from './components/Footer'
import HomeGallery from './components/homePageGallery'
import HomePageCard from './components/homePageCard'
import UserLoginPage from './components/UserManagement/userLogin'
import EventPhotos from './pages/EventManagement/selectPhotosAlbum'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route
              path='/'
              element={<>
                <HomeGallery />
                <br></br>
                <HomePageCard />
              </>}
            />
            <Route
              path='/signin'
              element={<UserLoginPage/>}
            />
            <Route
              path='/selectPhotos'
              element={<>
                <Sidebar />
                <EventPhotos/>
                <br></br>
              </>}
            />
            <Route
              path='/viewVideos'
              element={<>
                <Sidebar />
                <br></br>
              </>}
            />
            <Route
              path='/viewAlbum'
              element={<>
                <Sidebar />
                <br></br>
              </>}
            />
            <Route
              path='/paymentHistory'
              element={<>
                <Sidebar />
                <br></br>
              </>}
            />
          </Routes>
          <br></br>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


      //  {/* <Sidebar/> */}
      //  <HomeGallery/>
      //  <br></br>
      //    <HomePageCard/>
      //      <br></br>
      //        <div className="pages">
      //          <Routes>
      //            <Route
      //              path='/home'
      //              element={<Home />}
      //            />
      //          <Route
      //            path='/api/eventPhotoAlbum/photos/:id'
      //            element={<UserSelectPhotos />}
      //          />
      //            <Route
      //              path='/signIn'
      //              element={<UserLoginPage/>}
      //            />                  
      //          </Routes>
      //        </div>