import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeGallery from './components/homePageGallery';
import HomePageCard from './components/homePageCard';
import SideBar from './components/Sidebar'

//User Management - Import Pages
import UserAccountPage from './pages/UserManagement/userAccount'

//Event Management - Import Pages
import EventPhotos from './pages/EventManagement/selectPhotosAlbum';
// import Album from './pages/EventManagement/photoAlbum';
import CustomeEvent from './pages/EventManagement/userEventDetails';
import AllAlbums from './pages/EventManagement/allAlbums';
import MyEvents from './pages/EventManagement/myEvents'
import ViewAlbm from './pages/EventManagement/viewAlbums'
import AddAlbum from './pages/EventManagement/addAlbum'

//User Management - Import Components
import UserLoginPage from './components/UserManagement/userLogin';

//Event Management - Import Components
import CustomerDetails from './components/EventManagement/userEventDetails'; 
import EditPhotoAlbum from './components/EventManagement/editPhotoAlbum'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<>
              <HomeGallery />
              <br />
              <HomePageCard />
            </>}
          />
          <Route
            path='/signin'
            element={<UserLoginPage />}
          />
          <Route
            path='/userAccount/:userId'
            element={<UserAccountPage />}
          />
          <Route
            path='/userAccount/:userId/myEvents'
            element={<>
              <UserAccountPage/>
              <MyEvents />
              <br />
            </>}
          />          
          <Route
            path='/selectPhotos'
            element={<>
              <SideBar/>
              <EventPhotos />
              <br />
            </>}
          />
          <Route
            path='/viewVideos'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum'
            element={<>
              {/* <SideBar/> */}
              <ViewAlbm/>
              {/* <Album /> */}
              <br />
            </>}
          />
          <Route
            path='/paymentHistory'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/cusEventInfo'
            element={<>
              <CustomeEvent />
              <br />
            </>}
          />
          <Route
            path='/manageAlbums'
            element={<>
              <AllAlbums />
              <br />
            </>}
          />
          <Route
            path='/manageAlbums/addAlbum'
            element={<>
              <AddAlbum />
              <br />
            </>}
          />
          <Route path='/customerDetails/:eventId' element={<CustomerDetails />} />
          <Route path='/editAlbum/:photoAlbumId' element={<EditPhotoAlbum />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

